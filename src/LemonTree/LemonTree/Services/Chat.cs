using Microsoft.AspNetCore.SignalR;
using System;

namespace LemonTree.Services
{
    public class Chat : Hub
    {
        public static Chat ChatHub;

        public void BroadcastMessage(string name, string message)
        {
            if(Clients != null)
            {
                ChatHub = this;
            }
            Clients.All.SendAsync("broadcastMessage", name, message);
        }

        public void Echo(string name, string message)
        {
            Clients.Client(Context.ConnectionId).SendAsync("echo", name, message + " (echo from server)");
        }
    }
}
