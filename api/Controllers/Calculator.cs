using System;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using Microsoft.AspNetCore.Cors;

namespace api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Calculator : ControllerBase
    {
        [EnableCors("allowOrigin")]
        [HttpPost]
        public IActionResult Add(Numbers numbers)
        {
            var sum = numbers.FirstNumber + numbers.SecondNumber;
            return Ok(sum);
        }
    }
}