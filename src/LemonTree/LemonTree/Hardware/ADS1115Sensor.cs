namespace LemonTree.Hardware
{
    using Iot.Device.Ads1115;
    using System;
    using System.Device.I2c;
    using System.Threading.Tasks;

    /// <summary>
    /// Class that represents the ADS1115
    /// </summary>
    public class ADS1115Sensor : IDisposable
    {
        private readonly Ads1115 sensor;

        public ADS1115Sensor()
        {
            // set I2C bus ID: 1
            // ADS1115 Addr Pin connect to GND
            I2cConnectionSettings settings = new I2cConnectionSettings(1, (int)I2cAddress.GND);
            I2cDevice device = I2cDevice.Create(settings);

            // pass in I2cDevice
            this.sensor = new Ads1115(device, InputMultiplexer.AIN0, MeasuringRange.FS6144);
        }

        public double GetValue()
        {
            // read raw data form the sensor
            short raw = this.sensor.ReadRaw();
            // raw data convert to voltage
            return this.sensor.RawToVoltage(raw);
        }

        public void Dispose()
        {
            if(sensor != null)
            {
                sensor.Dispose();
            }
        }
    }

}
