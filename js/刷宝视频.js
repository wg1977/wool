//耗时2小时40分钟
launchApp("刷宝短视频");
var sh = new Shell(true);
id("cancel").waitFor();
id("cancel").find().click();
sleep(2000);
Tap(800,1200);
for (var i= 0; i<1020; i++)
{    
    sleep(6000);
    Tap(100,233);
    sleep(1000);
    back();
    sleep(1000);
    toastLog("计数器："+(i+1));
    Swipe(800, 900, 800, 286, 300);
    sleep(1000);
}
sh.exec("am force-stop "+getPackageName("刷宝短视频"));
sleep(1000);
sh.exit;
toastLog("【刷宝】已完成计划任务并退出APP！");