using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using LemonTree.Models;
using System.Device.Gpio;
using LemonTree.Hardware;
using LemonTree.Services;
using Microsoft.AspNetCore.SignalR;

namespace LemonTree.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IHubContext<Chat> SignalRHubContext;

        public HomeController(ILogger<HomeController> logger, IHubContext<Chat> ctx)
        {
            this.SignalRHubContext = ctx;
            _logger = logger;
        }

        public async Task<IActionResult> Index()
        {
            try
            {
                await this.SignalRHubContext.Clients.All.SendAsync("broadcastMessage", "Carlos", "13");

                using (ADS1115Sensor sensor = new ADS1115Sensor())
                {
                    ViewBag.Sensor = sensor.GetValue();
                    return View();
                }
            }
            catch(Exception ex)
            {
                ViewBag.Sensor = "no sensor";
                return View();
            }
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
