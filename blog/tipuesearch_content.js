var tipuesearch = {"pages":[{"url":"./pages/about/","title":"About","text":"2016Fall 修課成員網誌","tags":"misc"},{"url":"./brython-hui-tu-jiao-xue-w11.html","title":"Brython 繪圖教學 W11","text":"繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math # 準備繪圖畫布 canvas = doc[\"chord1\"] ctx = canvas.getContext(\"2d\") ''' # 改用 background 函式繪圖 # 水平線 for i in range(5): ctx.beginPath() # 設定線的寬度為 1 個單位 if i == 0: ctx.lineWidth = 7 else: ctx.lineWidth = 1 ctx.moveTo(99, 100+i*30) ctx.lineTo(201, 100+i*30) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() # 垂直線 for i in range(6): ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 ctx.moveTo(100+i*20, 100) ctx.lineTo(100+i*20, 220) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() ''' def canvasText(x, y, fontSize, string, sup, sub, color, ctx): # 標定各弦音符號, 以及把位編號 ctx.beginPath() ctx.fillStyle = color ctx.strokeStyle = color #ctx.font = \"20px Arial\" ctx.font = str(fontSize)+ \"px Arial\" ctx.fillText(string, x, y) ctx.font = str(fontSize-8)+ \"px Arial\" if sup != \"\": ctx.fillText(sup, x+fontSize/1.6, y-fontSize/2) if sub != \"\": ctx.fillText(sup, x+fontSize/1.6, y) ctx.fill() ctx.stroke() ctx.closePath()","tags":"Misc"},{"url":"./brython-hui-tu-jiao-xue.html","title":"Brython 繪圖教學","text":"繪圖流程, 導入程式庫, 啟動, 然後引用各種模組開始繪圖 window.onload=function(){ brython(1); } from browser import document as doc import math canvas = doc[\"guitar\"] ctx = canvas.getContext(\"2d\") ctx.beginPath() ctx.lineWidth = 1 inc = 5 for i in range(10): ctx.moveTo(100+i*inc,100) ctx.lineTo(100+i*inc,200) ctx.lineTo(100,100) ctx.lineTo(150,200) # 設定顏色為藍色,也可以使用'rgb(0,0,255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath() 以下為程式碼: window.onload=function(){ brython(1); } from browser import document as doc import math canvas = doc[\"guitar\"] ctx = canvas.getContext(\"2d\") ctx.beginPath() ctx.lineWidth = 1 inc = 5 for i in range(10): ctx.moveTo(100+i*inc,100) ctx.lineTo(100+i*inc,200) ctx.lineTo(100,100) ctx.lineTo(150,200) # 設定顏色為藍色,也可以使用'rgb(0,0,255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" ctx.stroke() ctx.closePath()","tags":"Misc"},{"url":"./2016fall-ji-jie-she-ji-ji-suan-ji-cheng-shi-jiao-xue.html","title":"2016Fall 機械設計計算機程式教學","text":"本課程提供學生紮實之物件導向或式概念、Python程式語言訓練，本課程強調程式核心技術之撰寫經驗，包括：決策控制、迴圈、動畫、人機互動、集合與陣列。 教導機械設計系的學生如何用創造力以及想像力發揮到最好。","tags":"Misc"},{"url":"./2016fall-jian-bao-yu-wang-zhi-xi-tong.html","title":"2016Fall 簡報與網誌系統","text":"這個系統共集結了 reveal.js 網際簡報與 pelican 靜態網誌系統. 網誌 Category 網誌 Tags reveal.js 使用導引","tags":"Misc"}]};