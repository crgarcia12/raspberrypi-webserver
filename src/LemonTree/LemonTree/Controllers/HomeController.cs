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

namespace LemonTree.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
<<<<<<< HEAD
            try
            {
                int pin = 17;
                GpioController controller = new GpioController();
                controller.OpenPin(pin, PinMode.Input);
                PinValue pinValue = controller.Read(pin);
                ViewBag.PinValue = pinValue == PinValue.High ? "HIGH" : "LOW";
            }
            catch(Exception ex)
            {

            }
            return View();
=======

            using (ADS1115Sensor sensor = new ADS1115Sensor())
            {
                ViewBag.Sensor = sensor.GetValue();
                return View();
            }
>>>>>>> 020559a1bf0467b5c95ffc0a5e52d52a050948b9
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
