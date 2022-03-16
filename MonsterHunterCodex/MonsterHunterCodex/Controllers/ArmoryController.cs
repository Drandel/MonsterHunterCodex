using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MonsterHunterCodex.Controllers
{
    public class ArmoryController : Controller
    {
        // GET: Armory
        public ActionResult Index()
        {
            ArmoryModel vm = new ArmoryModel()
            {
                Test1 = "model test",
                Test2 = 69
            };
            return View(vm);
        }
    }
}