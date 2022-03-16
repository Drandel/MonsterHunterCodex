using MonsterHunterCodex.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MonsterHunterCodex.Controllers
{
    public class RiseArmoryController : Controller
    {
        // GET: RiseArmory
        public ActionResult Index()
        {
            return View(new RiseArmoryModel());
        }
    }
}