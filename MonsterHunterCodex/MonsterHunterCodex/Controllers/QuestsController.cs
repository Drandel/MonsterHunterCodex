using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MonsterHunterCodex.Controllers
{
    public class QuestsController : Controller
    {
        // GET: Quests
        public ActionResult Index()
        {
            return View();
        }
    }
}