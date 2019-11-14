using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MonsterHunterCodex.Controllers
{
    public class MonstersController : Controller
    {
        // GET: Monsters
        public ActionResult Index()
        {
            return View();
        }
    }
}