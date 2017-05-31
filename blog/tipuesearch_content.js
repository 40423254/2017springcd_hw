var tipuesearch = {"pages":[{"title":"About","tags":"misc","text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲: http://github.com/mdecourse/2017springcd 課程投影片: http://mdecourse.github.io/2017springcd 課程網誌: http://mdecourse.github.io/2017springcd/blog","url":"./pages/about/"},{"title":"20170531 week15","tags":"40423254","text":"W15練習 2017-05-31_W15漸開線齒輪練習 from 蘇柏丞 on Vimeo . window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document as doc import math # deg 為角度轉為徑度的轉換因子 deg = math.pi/180. # 定義 Spur 類別 class Spur(object): def __init__(self, ctx): self.ctx = ctx def create_line(self, x1, y1, x2, y2, width=3, fill=\"red\"): self.ctx.beginPath() self.ctx.lineWidth = width self.ctx.moveTo(x1, y1) self.ctx.lineTo(x2, y2) self.ctx.strokeStyle = fill self.ctx.stroke() # # 定義一個繪正齒輪的繪圖函式 # midx 為齒輪圓心 x 座標 # midy 為齒輪圓心 y 座標 # rp 為節圓半徑, n 為齒數 # pa 為壓力角 (deg) # rot 為旋轉角 (deg) # 已經針對 n 大於等於 52 齒時的繪圖錯誤修正, 因為 base circle 與齒根圓大小必須進行判斷 def Gear(self, midx, midy, rp, n=20, pa=20, color=\"black\"): # 齒輪漸開線分成 15 線段繪製 imax = 15 # 在輸入的畫布上繪製直線, 由圓心到節圓 y 軸頂點畫一直線 self.create_line(midx, midy, midx, midy-rp) # 畫出 rp 圓, 畫圓函式尚未定義 #create_oval(midx-rp, midy-rp, midx+rp, midy+rp, width=2) # a 為模數 (代表公制中齒的大小), 模數為節圓直徑(稱為節徑)除以齒數 # 模數也就是齒冠大小 a=2*rp/n # d 為齒根大小, 為模數的 1.157 或 1.25倍, 這裡採 1.25 倍 d=2.5*rp/n # ra 為齒輪的外圍半徑 ra=rp+a # 畫出 ra 圓, 畫圓函式尚未定義 #create_oval(midx-ra, midy-ra, midx+ra, midy+ra, width=1) # rb 則為齒輪的基圓半徑 # 基圓為漸開線長齒之基準圓 rb=rp*math.cos(pa*deg) # 畫出 rb 圓 (基圓), 畫圓函式尚未定義 #create_oval(midx-rb, midy-rb, midx+rb, midy+rb, width=1) # rd 為齒根圓半徑 rd=rp-d # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd # 畫出 rd 圓 (齒根圓), 畫圓函式尚未定義 #create_oval(midx-rd, midy-rd, midx+rd, midy+rd, width=1) # dr 則為基圓到齒頂圓半徑分成 imax 段後的每段半徑增量大小 # 將圓弧分成 imax 段來繪製漸開線 # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: dr = (ra-rd)/imax else: dr=(ra-rb)/imax # tan(pa*deg)-pa*deg 為漸開線函數 sigma=math.pi/(2*n)+math.tan(pa*deg)-pa*deg for j in range(n): ang=-2.*j*math.pi/n+sigma ang2=2.*j*math.pi/n+sigma lxd=midx+rd*math.sin(ang2-2.*math.pi/n) lyd=midy-rd*math.cos(ang2-2.*math.pi/n) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(alpha-ang) ypt=r*math.cos(alpha-ang) xd=rd*math.sin(-ang) yd=rd*math.cos(-ang) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由左側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): lfx=midx+xpt lfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # the line from last end of dedendum point to the recent # end of dedendum point # lxd 為齒根圓上的左側 x 座標, lyd 則為 y 座標 # 下列為齒根圓上用來近似圓弧的直線 self.create_line((lxd),(lyd),(midx+xd),(midy-yd),fill=color) for i in range(imax+1): # 當 rd 大於 rb 時, 漸開線並非畫至 rb, 而是 rd if rd>rb: r=rd+i*dr else: r=rb+i*dr theta=math.sqrt((r*r)/(rb*rb)-1.) alpha=theta-math.atan(theta) xpt=r*math.sin(ang2-alpha) ypt=r*math.cos(ang2-alpha) xd=rd*math.sin(ang2) yd=rd*math.cos(ang2) # i=0 時, 繪線起點由齒根圓上的點, 作為起點 if(i==0): last_x = midx+xd last_y = midy-yd # 由右側齒根圓作為起點, 除第一點 (xd,yd) 齒根圓上的起點外, 其餘的 (xpt,ypt)則為漸開線上的分段點 self.create_line((midx+xpt),(midy-ypt),(last_x),(last_y),fill=color) # 最後一點, 則為齒頂圓 if(i==imax): rfx=midx+xpt rfy=midy-ypt last_x = midx+xpt last_y = midy-ypt # lfx 為齒頂圓上的左側 x 座標, lfy 則為 y 座標 # 下列為齒頂圓上用來近似圓弧的直線 self.create_line(lfx,lfy,rfx,rfy,fill=color) canvas = doc['onegear'] ctx = canvas.getContext(\"2d\") x = (canvas.width)/2 y = (canvas.height)/2 r = 0.8*(canvas.height/2) # 齒數 n = 36 # 壓力角 pa = 20 Spur(ctx).Gear(x, y, r, n, pa, \"blue\")","url":"./2017spring-cd week15.html"},{"title":"20170517 week13","tags":"40423254","text":"5/17 第十三週 在onshape上繪製齒輪並組立 中心距斜度組立","url":"./2017spring-cd week13.html"},{"title":"20170510 week12","tags":"40423254","text":"5/10 第十二週 在onshape上繪製齒輪並組立","url":"./2017spring-cd week12.html"},{"title":"20170503 week11","tags":"40423254","text":"5/03 第十一週 1 . An Introduction to Agile Product Design ˙The benefits of being AGILE : boosting speed and innvation. ˙There are four tips that speed-to-market does : 1. Faster innvation : you can realize the shift of market more quiclky. 2. Lower development costs 3. Anlarge market share : If there is a product being pioneer, it meets less competitors. 4. Greater forecasting accuracy : The time between product design and release is shorter, so it is more likely to be green-light or others. 對產品設計及開發而言，\"變得靈活\"好處非常多，優勢也非常大。舉凡上列所提及，因未能更快的釋出產品，所以對產品的改革方面也有更多的時間；也因釋出的時間早，更能有效地避開競爭對手。而在具備上述條件之下，對產品開發的額外功能(像是綠能)也就有更多被考慮的空間。 2 . The Move To Agile Design: New Cloud CAD Tools Needed 這篇文章提到產品設計最優先考量的是\"速度\"，其次則是創新。靈活的過程+全雲端協同=未來CAD/CAM的趨勢。 3 . Onshape's Greatest Tech Tips (Volume I) There is mentioned that the TOP TEN TIPS every full-cloud CAD user should know : #1: compare it can be used to view the version , branches and history . #2: Follow Mode you can watch other doing their work \"on live\" #3: Export / Import DXF A drawing can be import / export to onshape . #4: Shortcut Toolbars The commomly used command can be customize to shortcut toolbars #5: Add Comments You can chat with others on live . #6: Snap Mode While Inserting Onshape will show you a graphic preview #7: Green Check To Insert Parts You can insert parts on onshape . #8: Multiple Browser Tabs You can view at mutiple monitors . #9: Roll To Here / Roll To End Roll back and roll to end . #10: Shift-Select When Importing Quickly import with simple icon.","url":"./2017spring-cd week11.html"},{"title":"20170426 week10","tags":"40423254","text":"4/26 第十週 將上禮拜繪製的四腳機構導入v-rep模擬。 2017-04-26_導入vrep模擬 from 蘇柏丞 on Vimeo .","url":"./2017spring-cd week10.html"},{"title":"20170419 week9","tags":"40423254","text":"4/19 第九週 1 . 每組每個人繪製一四連桿機構並抓點。 2017-04-19 期中-四連桿機構協同 Trace Point 查驗 from 蘇柏丞 on Vimeo . 2 . 利用onshape協同，共同繪製組裝四腳機構。 2017-04-19_onshape組立協同2 from 蘇柏丞 on Vimeo .","url":"./2017spring-cd week9.html"},{"title":"20170412 week8","tags":"40423254","text":"4/12 第八週 期中成績自評 將台大畢業生之hyperworks兩篇論文範例上傳至fossil倉儲","url":"./2017spring-cd week8.html"},{"title":"20170405 week7","tags":"40423254","text":"4/5 第七週 1 . fossil倉儲管理 利用以下指令對fossil倉儲進行管理 fossil clone uri foo.fossil (將遠端的倉儲下載下來) fossil open ./../../foo.fossil (將下載下來的倉儲打開) fossil add . (將改版的倉儲推至暫存區) fossil remote-url off (將自動推送改為手動，這是與git不同之處，fossil會自動推送) fossil push https://user@192.168.X.XX (將暫存區的檔案推至遠端) 2 . 在onshape繪製八連桿 2017-04-11 在onshape上繪製八連桿並組立 from 蘇柏丞 on Vimeo . 2017-04-11 修改八連桿的銷，由旋轉組立改為緊固組立 from 蘇柏丞 on Vimeo . 3 . 將八連桿導入v-rep模擬 2017-04-11 將八連桿導入v-rep模擬(上) from 蘇柏丞 on Vimeo .","url":"./2017spring-cd week7.html"},{"title":"20170329 week6","tags":"40423254","text":"3/29 第六週 跑馬燈測試 3/29 第六週 因joint過大，導致在v-rep上無法模擬。所以將其直徑從5mm縮降至3mm。 在onshape上繪製四連桿並組立。 在onshape上繪製四連桿: 將onshape上所繪製的四連桿組立: 2.將組立完成後的四連桿導入V-rep進行模擬","url":"./2017spring-cd week6.html"},{"title":"20170322 week5","tags":"40423254","text":"3/22 第五週 建立一個與project name同名的wiki，該wiki會成為首頁 認識fossil wiki的三種編譯方式-Fossil wiki，Markdown 以及html 利用V-rep導入solvespace做出的單連桿進行模擬","url":"./2017spring-cd week5.html"},{"title":"20170315 week4","tags":"40423254","text":"3/15 第四週 自己組別在 https://mde2a2.kmol.info/cdbg2/wiki?name=w4 主機上建立伺服器，並可以在上面做編輯。 在solvespace上繪製單連桿，轉出STL檔，導入vrep。 流程: 先繪製四連桿並組裝 轉成STL檔 開啟vrep，導入檔案 選擇mesh 選擇尺寸單位","url":"./2017spring-cd week4.html"},{"title":"20170308 week3","tags":"40423254","text":"3/8 第三週 從 https://mde2al.kmol.info 進入wiki檢視每周進度，並介紹了hyperworks這套軟體，包括檢測受力、受熱、流力、最小化資源利用。再來進行十部影片翻譯，以便了解hyperworks以及增進英文能力。 更改start的fossil路徑，讓程式自行尋找電腦ip，並由組長建立組別的https，讓組員在wiki上分配工作以及上傳作業。 各組在十部影片中選兩部影片進行翻譯 在solvespace上繪製30-50-60cm四連桿機構，並轉出STL檔，以import方式導入vrep。 繪製四連桿過程: 將四連桿導入至vrep過程: 在onshape上繪製30-50-60cm四連桿機構，並轉出STL檔，以import方式導入vrep。 將繪製的連桿上增繪50-50-50三角形，並分析上端點的路徑","url":"./2017spring-cd week3.html"},{"title":"20170301 week2","tags":"40423254","text":"3/1 第二週 利用fossil所架設的伺服器進入分組、填寫座位。之後利用python將組別劃分。 利用solvespace簡單模擬四連桿運動。 將四連桿導入v-rep進行模擬。","url":"./2017spring-cd week2.html"}]};