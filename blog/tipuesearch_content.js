var tipuesearch = {"pages":[{"title":"About","text":"2016Fall 修課成員網誌","url":"./pages/about/","tags":"misc"},{"title":"Brython 繪圖教學 W16","text":"2017 年元旦快樂 window.onload=function(){ brython(1); } from browser import document from browser import html import random num = random.randint(1,100) #設法將num列印在網頁上 print_location = document[\"newyear\"] def gen_int(): num = random.randint(1,49) print_location<=num+html.BR() def lottery(e): for i in range(6): get_int() print_location<=\"恭喜中獎\" +html.BR() document[\"but1\"].bind(\"click\",gen_int) 產生整數亂數","url":"./brython-hui-tu-jiao-xue-w16.html","tags":"Misc"},{"title":"Brython 繪圖教學 W15","text":"window.onload=function(){ brython(1); } from browser import document as do from browser import html c = do[\"con\"] def compa(e): your_input = input(\"請輸入一個整數!\") # 如何判斷所輸入的整數比 10 大 if int(your_input) > 10: c <= \"所輸入的整數:\" + your_input + \"比 10 大\" + html.BR() else: c <= \"所輸入的整數:\" + your_input + \"比 10 小\" + html.BR() #print(\"test\") ''' for i in range(5): c <= \"test\" + html.BR() ''' do[\"b1\"].bind(\"click\", compa) compa from browser import document as do from browser import html c = do[\"con\"] def compa(e): your_input = input(\"請輸入一個整數!\") # 如何判斷所輸入的整數比 10 大 if int(your_input) > 10: c <= \"所輸入的整數:\" + your_input + \"比 10 大\" + html.BR() else: c <= \"所輸入的整數:\" + your_input + \"比 10 小\" + html.BR() #print(\"test\") ''' for i in range(5): c <= \"test\" + html.BR() ''' do[\"b1\"].bind(\"click\", compa) compa","url":"./brython-hui-tu-jiao-xue-w15.html","tags":"Misc"},{"title":"Brython 繪圖教學 W14","text":"window.onload=function(){ brython(1); } from browser import document from browser import alert ''' # 利用 input() 取得使用者輸入, 然後進行資料處理或運算後, 列出結果 #01-01.py print (\"Hello World!\") #01-02.py thetext = input(\"Enter some text \") print (\"This is what you entered:\") print (thetext) #01-03.py # Note that \\n within quote marks forces a new line to be printed thetext = input(\"Enter some text\\n\") print (\"This is what you entered:\") print (thetext) #01-04.py prompt = \"Enter a some text \" thetext = input(prompt) print (\"This is what you entered:\") print (thetext) ''' def get_input(ev): the_input= input(\"請輸入\") alert(\"輸入為:\"+str(the_input)) document['ch01'].bind('click',get_input) s40523126 from browser import document from browser import alert def get_input(ev): the_input= input(\"請輸入\") alert(\"輸入為:\"+str(the_input)) document['ch01'].bind('click',get_input) s40523126","url":"./brython-hui-tu-jiao-xue-w14.html","tags":"Misc"},{"title":"Brython 繪圖教學 W13","text":"將 http://mde.tw/2016fallcp/course/Python3Programs.txt 整理成brython 開始進行範例分類: 接受使用者的輸入 利用alert() 顯示結果 直接列印結果 window.onload=function(){ brython(1); } <script></p> <p><!-- 以下實際利用 Brython 畫圖--> <div id=\"container\"></div> <script type=\"text/python3\"></p> <p>from browser import document as doc from browser import html container =doc['container'] mystring = \"\" num =input(\"請輸入重複執行次數:\") #for i in range(1,11): for i in range(1,int(num)+1): mystring +=str(i) + \":hello mde\" + html.BR() container &lt;=mystring 開始進行範例分類: 接受使用者的輸入","url":"./brython-hui-tu-jiao-xue-w13.html","tags":"Misc"},{"title":"Brython 繪圖教學 W12","text":"繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") def background(x, y, xinc, yinc, xnum, ynum, ctx): # 水平線 for i in range(ynum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(x-1, y+i*yinc) ctx.lineTo(x+xnum*xinc+1, y+i*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(xnum+1): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(x+i*xinc, y) ctx.lineTo(x+i*xinc, y+ynum*yinc) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() def canvasText(x, y, fontSize, string, sup, sub, color, ctx): # 標定各弦音符號, 以及把位編號 ctx.beginPath() ctx.fillStyle = color ctx.strokeStyle = color #ctx.font = \"20px Arial\" ctx.font = str(fontSize)+ \"px Arial\" ctx.fillText(string, x, y) ctx.font = str(fontSize-8)+ \"px Arial\" if sup != \"\": ctx.fillText(sup, x+fontSize/1.6, y-fontSize/2) if sub != \"\": ctx.fillText(sup, x+fontSize/1.6, y) ctx.fill() ctx.stroke() ctx.closePath() w = 20 h = 30 background(100, 100, w, h, 5, 5, ctx) canvasText(100, 80, 20, \"A\", \"b\", \"\", \"black\", ctx)","url":"./brython-hui-tu-jiao-xue-w12.html","tags":"Misc"},{"title":"Brython 繪圖教學","text":"繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math canvas = doc[\"guitar\"] ctx = canvas.getContext(\"2d\") ctx.beginPath() ctx.lineWidth = 1 inc = 5 for i in range(10): ctx.moveTo(100+i*inc,100) ctx.lineTo(100+i*inc,200) ctx.lineTo(100,100) ctx.lineTo(150,200) # 設定顏色為藍色,也可以使用'rgb(0,0,255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() 以下為程式碼: window.onload=function(){ brython(1); } from browser import document as doc import math canvas = doc[\"guitar\"] ctx = canvas.getContext(\"2d\") ctx.beginPath() ctx.lineWidth = 1 inc = 5 for i in range(10): ctx.moveTo(100+i*inc,100) ctx.lineTo(100+i*inc,200) ctx.lineTo(100,100) ctx.lineTo(150,200) # 設定顏色為藍色,也可以使用'rgb(0,0,255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath()","url":"./brython-hui-tu-jiao-xue.html","tags":"Misc"},{"title":"2016Fall 機械設計計算機程式教學","text":"本課程提供學生紮實之物件導向或式概念、Python程式語言訓練，本課程強調程式核心技術之撰寫經驗，包括：決策控制、迴圈、動畫、人機互動、集合與陣列。 教導機械設計系的學生如何用創造力以及想像力發揮到最好。","url":"./2016fall-ji-jie-she-ji-ji-suan-ji-cheng-shi-jiao-xue.html","tags":"Misc"},{"title":"2016Fall 簡報與網誌系統","text":"這個系統共集結了 reveal.js 網際簡報與 pelican 靜態網誌系統. 網誌 Category 網誌 Tags reveal.js 使用導引","url":"./2016fall-jian-bao-yu-wang-zhi-xi-tong.html","tags":"Misc"}]};