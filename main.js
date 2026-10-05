document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("postModal");
  const modalSlider = document.getElementById("modalSlider");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");
  const closeBtn = document.querySelector(".modal .close");
  const posts = [
    {
      id: "postJ",
      title: "",
      content: `“我又做了自己的 Spoti...？” 

最近有點玩到失心瘋了，根本就在不務正業。繼上次做了Instagram ，對於 Vibe coding 的信心程度大增。為了讓這個技能能夠大顯身手，我又做了一個新的網站。

不過，這當然不是為了衝經驗值而做的又一個無聊專案，但是先讓我解釋一下這個網站在做什麼：

1. 這不是一個音樂網站

某一天發現，其實我的生活中有很大一部分都在聽歌。聽歌的app這麼多，歌單也是建了又建，因為為我們總是想為某段情緒編一首曲。其中不乏有我們最愛的幾首音樂，然而離這些稍遠一點的，我們知道它存在，會聽，僅此而已。即使某一瞬是你最愛的歌。

不想讓這些逐漸淡出視線的歌從此消失，同時，將曾經是自己喜愛的音樂好好收藏。這是 Verse 之所以在這裡的原因。

2. 收藏每個生活的剪影

除此之外，我相信大部分人都有過看到某句特別有感的話。有些句子就當作看過，默念一遍就當作自己記住了；有些句子恰好激發了開始記錄名言佳句的衝動，手機備忘錄便多了一條早已塵封的句子。

所以，為了上面這些目的，我做了Verse。

（對我知道那下面那個Instagram 真的沒什麼實際作用。）

------------------------------------

其實做Verse是真的挺好玩的，這是我第一次上架自己的伺服器，是第一次設計Logo，是第一次做了一個包含設計、實用體驗、後續維護的網站，也是第一次做了一個真的可以改變生活的東西。

先來說說這個網站有什麼吧。首先是歌曲列表，所有上傳的音樂都在這裡，可以依喜好排序（還沒做好標籤的功能）。每一首歌可以進入詳細頁面，包含該首歌的歌詞和其他資訊，同時可以刪除歌曲。在詳細資訊的頁面中，有一個收藏歌詞歌詞的功能。只要在其中輸入該首歌的某一段歌詞，便會將資料傳給伺服器修改 Javascript 檔案，而在「剪影」中，便會出現你所收藏的所有歌詞。

中英日韓和電腦有支援的語言都可以。

除此之外，還有一個文章區，可以在其中記錄各種書籍的段落、詩篇、台詞或是朋友說過的話，並且同樣有收藏的功能。

最後統計的部分，Verse裡有統計歌曲數量、歌手數量、文章數量，甚至每個歌手還有頁面在整理所有歌曲，可歌可泣。首頁裡還包含最新加入的收藏、歌曲、和文章。

最後最重要的，在網頁上加入新的歌曲或文章，歸功於線上伺服器，我們不再需要手動修改程式碼，只需要將新增歌曲的表單填完，幾乎同時，頁面上便會出現新的歌曲資訊了。

Verse 還同時支援手機和電腦螢幕（終於）。當然如果你用下面的網址，是無法新增或刪除歌曲，或其他有用的功能，因為我沒有公開真正的伺服器網址。

------------------------------------

作為第一個可以遠程控制的網站，我對 Verse 還是挺滿意的。

然而，我沒打算獨享成果。作為一個歌曲和文字收藏的網站，我當然是希望越多人可以使用是最好。

然而一方面，其實我不確定功能這麼雞肋的網站有沒有人要用。一方面要是要製作可以讓更多人登入的網站，勢必需要更大的伺服器空間，隨之而來是更大的成本。

所以呢我做了一個匿名表單： https://forms.gle/6LB4jo2C2ZT47DTn8
（原本是要留言 +1 但這樣太白痴了）如果你想讓我知道又有一個人對這個有興趣的話，歡迎填寫這個表單。

當然我會再研究一下到底實作上需要多少成本，不過如果要公開的話，還要改成登入制和資料庫就是了。

最後，如果你是真的很想用，或許可以私訊我？現在使用的伺服器有流量限制，但如果單純花錢升級的話應該可以容納一些人使用，最後再攤掉升級的費用就好。

還有如果共享的話，資料會有被我看到的風險喔（就像所有手機在聽我們說話的那樣），可以自行匿名，但是如果會顧慮的話建議不要參與喔。
（我會確保用完全匿名的方式，所以可以稍微放心）

------------------------------------

把不重要的事情說一說：
1. 我使用的 AI 是 perplexity，幾乎完成了我8成以上的工作。要說我是協作者也不過分。
2. 第一張照片的 LOGO，是我用 Goodnotes 畫的。
3. 如果要說為什麽要取 Verse，除了看起來很帥以外，Verse 同時有主歌、詩、韻文和 one of the parts that a poem or song is divided into 
（Form 劍橋字典）的意思。
4. 有Verse沒有Chorus嗎？目前沒有，或許以後有機會？
5. LOGO的設計理念，如果你覺得有點像特斯拉的話，你是對的。但是那個V真的是我畫的。
6. 表單裡有可以給我建議的欄位（或是直接留言也可以），只是會被我強迫+1而已。

------------------------------------

連結在這裡：https://weiqunc.github.io/Verse/
      `,
      photos: [
        "postJ-1.jpg",
        "postJ-2.jpg",
        "postJ-3.jpg",
        "postJ-4.jpg",
        "postJ-5.jpg",
        "postJ-6.jpg",
        "postJ-7.jpg",
        "postJ-8.jpg"
      ],
      size: "large",
      location: "臺灣"
    },
    {
      id: "postI",
      title: "",
      content: `“我做了自己的 Instagram。” 

事情是這樣的：因為實在受不了meta對照片的摧殘，加上IG之前對圖片大小霸道的整改，我決定自己做一個Instagram。
  
對，整件事情差不多就這樣。

之前其實也做過個人網站但沒什麼內容好放，又或許加上之前其實有段時間想做軟體工程師，整個網站很順利地被做出來了。

那不然可以介紹一下使用說明，方向鍵左右可以切貼文裡的照片，上下鍵可以分別控制前後一篇貼文。手機用戶抱歉，光響應式設計就用超久，在手機上能看就已經很好了🫠 (所以你會發現用手機看整個很亂)。影片的話會自動播放但是會預設靜音，然後終於可以快轉了。

🙏這邊要先鄭重道個歉🙏，貼文的照片和影片都需要加載時間，因為要顧全品質沒有壓縮，還請見諒。(我正努力加快速度了)

其實做自己的 Instagram 還是有很多考量：首先就是如果哪天我不用 Instagram 了，曾經留下的貼文也不會消失。(我是希望可以用爬蟲把留言和其他東西也抓一抓啦，但那好像有點超出能力範圍了)。

再來就是我的網站我想圖片怎麼放就怎麼放。不過現在終於了解為什麼IG要改成統一長寬了，要改真的超麻煩，所以有bug可以留言跟我說一下。

最後，就是不想太習慣我們習以為常的事。當我們把屬於自己一些東西放在網路上，期待某人可以替我保管，然而主控權從來就不在我這裡。隨時可以壓縮、拉伸，甚至刪除。我只不過是將主控權重新握回手裡而已。

不過，之後一段時間內還是會同時新增兩邊的貼文喔。(這裡就我純粹看爽的而已)

連結在這裡：https://weiqunc.github.io/Block/
      `,
      photos: [
        "postI-1.jpg",
        "postI-2.jpg",
        "postI-3.jpg"
      ],
      size: "large",
      location: "臺灣"
    },
    {
      id: "postH",
      title: "",
      content: `🌸Sakura Science Exchange Program🌸

感謝JST提供機會讓我參加這個活動。

七天的行程裡，來自馬來西亞、印度、烏克蘭、臺灣的我們，來到這個不同以往的地方。

雖然是第一次見面，我們仍然玩的開心、離別時會不捨，仍然期待下次會在哪裡遇見。

我們通宵等待的日出，每天回程路過的夕陽，雙腳走過的每張照片，手握一對A輸掉的場景，歷歷在目。
感謝日本給我這麼好的回憶，在旅途中路過的一切風景，每個人，每個舞蹈，每首歌。

我很喜歡這個地方，甚至想來這個地方做研究。也很喜歡在這段時間遇見的你們，有緣再讓我膜拜一下🛐。

感謝這趟旅程中遇見的所有人。
感謝你們讓今天充滿意義。
Thank you to everyone I met in this journey.
It means a lot to me.`,
      photos: [
        "postH-1.jpg",
        "postH-2.jpg",
        "postH-3.jpg",
        "postH-4.jpg",
        "postH-5.jpg",
        "postH-6.jpg",
        "postH-7.jpg",
        "postH-8.jpg",
        "postH-9.jpg",
        "postH-10.jpg",
        "postH-11.jpg",
        "postH-12.jpg",
        "postH-13.jpg",
        "postH-14.jpg",
        "postH-15.jpg",
        "postH-16.jpg",
        "postH-17.jpg",
        "postH-18.jpg",
        "postH-19.jpg",
        "postH-20.jpg"
      ],
      size: "small",
      location: "Tokyo Japan"
    },
    {
      id: "postG",
      title: "",
      content: `“有些事一旦化為言語，反而會太過輕柔，隨風飛去。
不如像飄落的花瓣一般，一點一滴慢慢地傳達。”

我在黑板寫下「青春」兩個字，久久不能釋懷。

青春是愛、勇氣、希望。

打進心裡的鼓點、心頭一震的詞藻、來自青春的吶喊。
是相視一笑的默契，是只憑前奏就能完成整首歌。
現場的全身投入、耳機裡的輕輕唱、或是隨口哼上一曲。

是看著歌詞就能看好久好久。

青春是揮灑。

心跳傳來的是興奮還是恐懼？即使雙腳已不聽使喚，動作逐漸變得僵硬。如果比賽只是優勝劣敗，那該多無趣啊！因為各種不確定性，比賽才有趣。

輸了也好，贏了也罷
不會有人送命，也不會有人復活
沒有惡勢力作祟，也沒有世界毀滅危機
我們還是想看看這個廣闊的世界 但請容許我
在這間幾坪大小的教室裡 貪戀這段平凡無奇的時光

青春是放學後的街

或是夕陽相伴，或是夜幕垂降。是又去不會吃膩那家。
是曾流行過的某個梗，可以笑好久好久。

那一年天空很高，風很清澈，青春彷彿有了顏色。
是一大片的藍色，帶點亮的紅色。看久了，藍色變成青色。

當時只道是尋常。

青春是啟航。

從童年成為青春，從青春走向夢想，從夢想走進人生。
高中這三年，佔我來世迄今的六分之一。這段路才不過開始，卻像人生中點。未來的你要帶著我去到我們不曾見過大海。

我忘記我的童年是怎麼結束的。不懂什麼是道別，只知道或許之後會很少見面。

青春是說不出口的話

人生、音樂、夢想、愛情、朋友、家人；

喜歡、感動、不捨、難過、悲傷、願景 ……

從前的我們閉口不提，不想顯得矯情。以後的我們不曾提起，因為已沒有機會說。
或許遺憾也是青春的一部分吧，畢竟誰的青春不遺憾呢？

青春是家與遠方

我真的得離開這裡嗎？以後的我會在哪裡？

長大後誰不是離家出走。

可能還是有點捨不得吧，還是喜歡這裡的天氣，喜歡熟悉的每個街角，喜歡認識的每個紅綠燈，喜歡總是有個屬於我的地方，喜歡我曾經在這裡的記憶。
喜歡熟悉的這片天空，總是有不一樣的光影交錯
喜歡這個不怎麼好但捨不得離開的地方。就像每天回家都要爬上的坡，走著走著也不陡了。

歲月將我帶去遠方，我只想待在這裡，和平常一樣說說話。

青春是當我變成我們

生活本是索然無味的，我可以自己一個人笑，自己一個人找事情忙，自己一個人活在自己的世界裡。但這或許不是青春的模樣。

教我熱愛，教我快樂，教會我青春的模樣，教我原來人可以笑得這麼開心。教我原來有些音色是我無法獨自演奏的。

雖然這些即將是從前。

蟬鳴是窗外倒數的鐘聲，走廊上的身影不再是我們。既然是離別的前奏，何不唱一首屬於我們的歌。

青春是我們曾經

我們的名字沒有被記錄在世界史冊上，但我們曾經做過很多很強的事喔。我們成功把導師在運動會上舉起來，曾經剪過畢業典禮上的影片，曾經佔領整座雨賢館，曾經踏上同個北上行程，身上的名牌換過無數個。

或許我們都低估了自己有多厲害。我們知道自己很強，但人們總是有義務找出某個物理量，說明自己有多不同。

回憶 = \int_{相識}^{now} 故事 d(time).

青春是不能重來的行程

或許在遙遠世界彼方，我們真的活出了世界第一的青春，我們只需要這樣相信就好。雖然青春不怎麼完美，但也不比任何人的差。因為是我們的青春。

若將青春寫成小說，那肯定是「這就是高中啊」，「這就是高中啊」。
若將青春拍成電影，那肯定是 開頭 走過一遍校園，結尾 再走一遍校園。
若將青春畫成動漫，那肯定是十二季的青春校園喜劇。
若將青春拍成相片，那肯定是我與我們。

或許哪天，我們也會共同唏噓我們的青春。

青春是一群人、一把吉他。

青春是一本塵封的書，捨不得書上的灰塵又沒有勇氣翻開。

青春是手牽手坐上永不回頭的火車。

青春是一本太倉促的書，我們含著淚，一讀再讀。

青春是不回頭地一路狂飆。

青春是段跌跌撞撞的旅行，擁有後知後覺的美麗。

青春是再喚不回的天真。

青春是我，是你。

青春是…輪到你了。

「17歲的我們未滿十八，我們幼稚、古錐、青春、快樂，
我們知道明天會再見，所以不曾好好道別。
18歲的我們離開校園，我們成熟、聰明、強大、依然快樂，
我們知道還會見面，只是回不去從前的時光。」

———————————————————————————

我輕輕拂去黑板上的字跡，連同我的青春。`,
      photos: [
        "postG-1.jpg",
        "postG-2.jpg",
        "postG-3.jpg",
        "postG-4.jpg",
        "postG-5.jpg",
        "postG-6.jpg",
        "postG-7.jpg",
        "postG-8.jpg",
        "postG-9.jpg",
        "postG-10.jpg",
        "postG-11.jpg",
        "postG-12.jpg",
        "postG-13.jpg",
        "https://media.githubusercontent.com/media/weiqunc/Block/main/postG-14.mp4",
        "https://media.githubusercontent.com/media/weiqunc/Block/main/postG-15.mp4"
      ],
      size: "large",
      location: "彰化高中雨賢館"
    },
    {
      id: "postF",
      title: "",
      content: `“雨過天晴，走過一切皆是風景“

2月4日晚上9點半，從位於曼谷的飯店出發。算是臨時起意，我開始記錄下這趟11小時獨旅。

步行到捷運站，和這座短暫接觸的城市道別，接下來是一趟未知的旅程。照著先前規劃好的路線，買票、找路、等待，雖然忐忑，卻有些興奮。站在冷清的月台，期待只有我才知道的大事發生。

23點前順利抵達機場，離1點45的班機還有快3小時。一個人站在擁擠的機場大廳，不免開始有點緊張。路過的遊客，小孩的嬉鬧，時不時傳來的機場廣播，我能感覺到我的感官正在放大。拿到登機證後，我坐在大廳休息一下，因為距離考試只剩9小時。

進入海關之後，稍微走走看看，消磨登機前的時間。不過我的登機門不在免稅店旁邊，要搭15分鐘的接駁到登機口。抵達登機的大廳已經是凌晨，離登機口大概還要走幾百公尺的距離。不過這都算小事。

到了登機的時間，我在登機口觀望。當時這躺班機大部分人都已經到登機口了，但仍然還沒開始登機。看著遠方姍姍來遲的飛機，心裡掂量著自己還有沒有機會考試，除了等待只剩無盡的焦慮。順帶一提，整趟旅程只有在機場大廳才重新連上網路，包括在登機口前都是沒有網路的。

夜很黑，但無法入睡。最大限度的休息是闔上眼睛暫停思考。還要隨時注意糊在一塊的機場廣播，從僅剩能聽懂的單字揣測意思。

看著窗外的飛機，即使心中仍感慨工業革命的奇蹟，但現在心中只有何時起飛的念頭。等待的時間很長，但我心中還是期待，期待這篇故事會怎麼被寫成文章。

經歷三小時的飛行，旅程還沒結束。7：12開始下飛機，雖然重新連上網路，但還有出關和坐捷運到公館兩關。出關也不是這麼容易，還要搭機場巴士到大廳，此時距離考試還有2小時。

心想要是出關還要一小時，我絕對來不及到公館。一路快走在最前面，安檢也是最快速度，最後15分鐘在桃園機場取得自由之身。剩下就是一路轉車壓線到考場。

雖一路焦慮，從泰國到臺灣、從飯店到機場、從黑夜到白天，我仍然拿起手機，紀錄下我眼睛所見過的一切。即使路途不一定順遂，也不要忘了欣賞沿途的花草樹木、鳥語花香。雨過天晴，走過一切皆是風景。`,
      photos: [
        "https://media.githubusercontent.com/media/weiqunc/Block/main/postF-1.mp4"
      ],
      size: "small",
      location: "曼谷,臺北"
    },
    {
      id: "postE",
      title: "",
      content: `“當抵達的那一刻，曾經的我就已功成身退了“

2025 TISF (Taiwan International Science Fair)，30個國家，174件作品，在科教館舉行。

隔了兩年，我又回到這個地方。和不太一樣的人，不太一樣心態。而我仍然很喜歡這裡的一切。

我很喜歡這裡的氛圍，我認識了一群對數學充滿熱忱的人，當中還有許多臺大數學的學長，甚至是未來的同學或學弟，期待我們未來在臺大相見。

第四天，即使是有一早上的第二階段評審，下午我們還是直衝信義區，逛了一圈松山文創，晚上在晃到101，本來要夜唱因為客滿準備回去，最後在捷運門前鬼轉象山，在22點攻頂，好像以前也幹過一樣的事。

第五天是公開展覽，雖然我們都不誤正業的到處亂晃，後來還直接在現場算起數學、跑程式模擬，期待你的頻道，這邊幫你引個流 @octopuskeng。

晚上的Culture night,
Thank you, guys. I had a fantastic night.
還有我們一路玩到四點的酒局，我相信我們都不會忘記。

這次的科展是我高中唯一一份科展主題（如果上一份算是國中的話），經歷了這麼多大大小小的比賽，總算是做了一個結尾。高中三年的科展結束了，要往更高學術殿堂走，看更廣的世界，認識更多的人，繼續研究數學。

兩年前，我曾來過這裡，抱著年輕人的滿腔熱血，許下對高中三年來的期待。回頭看，有些真的達成，有些遺憾收場。
今年，是高三生的最後一年。雖然未來不會再以這樣的身份加入國際科展，但我相信我會再次回到這裡。

Now, I am back.`,
      photos: [
        "postE-1.jpg",
        "postE-2.jpg",
        "postE-3.jpg",
        "postE-4.jpg",
        "postE-5.jpg",
        "postE-6.jpg",
        "postE-7.jpg",
        "postE-8.jpg",
        "postE-9.jpg",
        "postE-10.jpg",
        "postE-11.jpg"
      ],
      size: "large",
      location: "國立臺灣科學教育館"
    },
    {
      id: "postD",
      title: "",
      content: `彰化高中第十二屆科學班成果發表會 Hepatica
@hepatica_chsh12th
@chsh_12th_science

“感動 = 情境^投入”

辦成發到底是為了什麼阿？這是我兩個月以來存在心中的疑問。在成發的企劃書上，我寫下

“1. 為了培養我們舉辦大型活動的能力”
“2.增進口語表達能力，分享研究成果”
“3. 創造回憶”

此時游標在4. 的後方，亮，暗，亮，暗...
我需要知道問題的答案。

--
這星期五下午我們留下來討論主題吧！
要我說對於當我們班總召的感受，只能說很挫折吧。當然挫折不是失望的意思，而是有一股勁提不起來的感覺，但即使如此我相信大家依然是有自己的想法的。這兩個月以來，我最常對大家說的大概是，

我也不知道。

當然我也不盡然是都不知道該怎麼做比較好，只是覺得你們應該有自己的想法。有時候我也很想說，我與你們一樣，只是位普通的高中生...。我的想法不一定好，不一定對，不一定經過深思熟慮，有些問題的答案是需要思考的，而這正是工作的困難所在。

--
雖然是我們班的成發，但一路上，要好好道謝的人真的太多了，若有遺漏真的非常抱歉了。

首先，感謝所有當天的與會來賓，與我們一同完成一共360多人參加成發的創舉。
再來是我們科學班的班導師，球球，是我們班上隱藏的工作人員，總是在大家看不到的地方默默支持我們（像是會莫名其妙吸收很多費用），走在人群的後方，把遺漏的工作重新推上軌道，總是在我發現某些事情沒做的時候說事情已經處理完了，是超級carry的存在。
還有科學班助理楷敬，基本上我們需要協助，只要跟楷敬說一聲，事情就可以有著落。
再來就是感謝彰化高中借給我們這麼棒的場地，讓我們能夠在雨賢館裡任性一天。
還有縣長，校長，和所有主任，長官，謝謝為我們送上祝福和支持我們。
還有提供我們中場表演練習場地的音樂班、熱音社，及管樂社當天借給我們的鼓組，謝謝你們無私的支持。
還有317同學的家長們，也默默支持著我們。
以及217的同學們，謝謝你們當天和拍攝影片的支持。
還有成發準備過程中提供協助的老師們。
除了成發，還有指導我們能夠產出這些研究成果的指導老師及教授們。
最後是感謝3年17班的同學，我們一起辦了一場很棒的成發喔！

--
在成發的最後，其實我還有很多想講的話，雖然很想說是千言萬語一言難盡，但只是詞窮語塞想不出話而已。

我想請大家試想一下，手冊當中，簡報當中，甚至輕描帶過的一句話、一個字、一個數字、一個手勢，可能都出自幾十幾百甚至上千次的量測與實驗；一個環節，一張圖片，一個選擇，一個一閃而逝的瞬間，可能來自我們好幾小時甚至幾天的安排。

如果說有誰最符合雪割草的花意，大概是努力堅持到現在的我們。

--
成發阿，不過是台上，台下。
台下，我們兩目無神，怨懟一切失敗與辛酸。
台上，我們意氣風發，看淡一切辛苦與代價。

在很多年以後，我們或許會忘掉當初的辛苦、付出，不過現在，我們也可以自私的認為，自己已經做得足夠多，足夠好了。或許你在過程中默默承受了很多事情，但我想說，投入地越多，越能在心中烙下深刻的印記。

--
成發這種事，真的好難...

這個月不知道第幾次了，稍微癱倒在椅子上，耳機裡播放我聽不懂歌詞的日文歌，直到下一次回過頭來繼續生活。我也不知道我在等待什麼，等待一句可以起雞皮疙瘩的歌詞，等待一個忘掉一切的瞬間，等待一個大腦停止運轉的時刻...

人因思考而偉大，而痛苦。
只有在夜晚獨自一人時，才明白夜的漫長。放大審視自己那裡做錯了，說錯了什麼話，如果我怎麼做會怎麼樣...忘記自己何時睡去，只記得前一晚的問題依然沒有得到解答...
但即使如此，也不能放棄思考吧...

--
好可惜啊，沒有親眼看到大家在成發當天的表演，
有句話說，人不能同時擁有青春和對青春的感受，
同樣的，我們沒有機會同時有舉辦成發和享受成發的時候。

這樣想起來，還真的是錯過了很多，錯過了在台下聽報告的機會，錯過了在台下看影片的體驗，錯過了吃茶點的快樂，錯過了聽導師講感言的時刻。如果可以，我也好想在台下看成發阿。

--
所以成發到底為了什麼阿？

“為了滿足自己的期待吧”

要是當初怎麼做就好了...要是當初不做什麼就好了...
畢竟做的越多錯誤也就越多，我們何必冒這麼大的風險...

如果我們的成發，沒有曠世鉅作，沒有手冊茶點，沒有燈光變化，沒有海報邀請卡，沒有轉場笑話，沒有現場投影，沒有成發服...
我們是不是就能辦一場完美的成發呢？

或許是吧。
不過如果是這樣，那麼辦成發到底是為了什麼？

總召 陳偉群`,
      photos: [
        "postD-1.jpg",
        "postD-2.jpg",
        "postD-3.jpg",
        "postD-4.jpg",
        "postD-5.jpg",
        "postD-6.jpg",
        "postD-7.jpg",
        "postD-8.jpg",
        "postD-9.jpg",
        "https://media.githubusercontent.com/media/weiqunc/Block/main/postD-10.mp4"
      ],
      size: "large",
      location: "彰化高中雨賢館"
    },
    {
      id: "postC",
      title: "",
      content: `“真正熱愛才能體會的那種感動“ 

2023 TISF (Taiwan International Science Fair)，集結21個國家，135件作品，在科教館盛大開幕。

Mock MUN. 我遇到一群超強的隊友，在我心目中，我們就是最棒的一隊。 Team-H is the best!

Culture Night. Thank you for your hospitality. Your performances are impressive. I enjoyed it.

我還是很難相信，雙圓記，作為我國中時期的一份研究，竟然把我推向前所未有的高峰。我很慶幸能夠站在國際的舞台，與台灣最優秀的
一群人，評審老師以及學生，共同參與這場盛宴。當然，這一切只有我是絕對不可能做到的，所有曾經幫助過我們的教授，評審，老師，同學，兩位指導老師，與曾經參與過這份研究的所有成員，在此獻上最誠摯的感謝。

關於比賽的結果，我相信即使我沒有說，你們都有能力可以知道。不過對於我，比賽的結果早就已經不重要的，我最銘記在心的，還是那一天晚上的凌晨兩點。

老實說，當初我根本沒有想要報名TISF，即使報名了，我也只是想體驗一下，為未來的研究做準備，早就沒有繼續研究的想法，直到第一階段的評審結束，「你們明明都知道有什麼可以做，但你們卻沒有」我不知道當初我是怎麼思考這句話的，但我沒有馬上意會到教授的意思。

即便是現在，我也還在思考做研究應該抱有的態度，大師講座的講者 陳縕儂，曾經在訪談中說到：「很多人可能會更在意別人怎麼看自己勝過於你自己是不是真正想要這個東西。覺得我做的這個選擇，是不是普世認為是正確的一個決定。」，這比起比賽的結果來的重要太多了，往往只用成績來評價一件作品的成功或是失敗，至少對我而言是不對的。

當然，我很幸運的獲得了與許多其他國家的高中生見面的機會，但更幸運的我在這個年紀，改變了我的世界觀。感謝你們如此熱情，讓我能夠更加認識你們。在台灣以外，還有很多令人驚豔的人事物。他們具備很多我所沒有的，期待與你們的再次相見。

I will be back.`,
      photos: [
        "postC-1.jpg",
        "postC-2.jpg",
        "postC-3.jpg",
        "postC-4.jpg",
        "postC-5.jpg",
        "postC-6.jpg",
        "postC-7.jpg",
        "postC-8.jpg",
        "postC-9.jpg",
        "postC-10.jpg"
      ],
      size: "small",
      location: "國立臺灣科學教育館"
    }
  ];
  const SideProjects = [
    {
      id: "journal-20260214",
      title: "",
      content: `2026.2.14 日誌

現階段已經把基礎功能做完了。包含替換定義過的名詞、標籤階級與查找功能。現在呢，只能算是能用，但根本不會想去用。可能原因是現在還在debug的階段，還不知道哪裡有錯。但會覺得使用上很不順暢的感覺。

另一個大問題是，外觀上很不吸引人。雖然已經比我自己做還好看的多，但總覺得腦中有想像出一個「應該要那樣的背景」，但像描述又不知道怎麼描述。甚至不知道什麼是我想要的。但現在的外型實在拿不出手。

還有一個問題是，我還有想像出一些功能，但現在根本不確定能不能實現，很想做多一點挑戰，但很怕這樣的跨度太大。雖然現版本算是有用到新的方法像動態的生成頁面ejs，和一些包含映射的關係，但並不是很大的技術突破。

感覺自己其實有點這方面的潔癖。最近也在思考做這些網站的意義。雖然意義這種東西常常是人自己附加的，不是事物本身具有的特質，但不妨礙人們追尋意義。「你為什麼要做這個東西？」這句的回答，常常主角不真的是那個事物，而是「你」。這大概是為什麼旁人會這麼認為吧。

回到潔癖，總覺得很想超過過去的自己，明明他只是個高中生。現在其實會擔心自己會不會有一天感到疲倦。如果是說做網站，那肯定是會。但未來的我會想辦法吧，我是這樣認為的。
      `,
      photos: [],
      size: "large",
      location: "臺灣"
    },
    {
      id: "spD",
      title: "",
      content: `Verse
      `,
      photos: [
        "spD-1.jpg",
        "spD-2.jpg",
        "spD-3.jpg",
        "spD-4.jpg",
        "spD-5.jpg",
        "spD-6.jpg",
        "spD-7.jpg",
        "spD-8.jpg"
      ],
      size: "large",
      location: "臺灣"
    },
    {
      id: "spC",
      title: "",
      content: `"Texas hold 'em"

這是一個用 Google sheet 寫的德州撲克，

對，沒錯，就是那個 Google sheet，

回想起來還真是說來話長。

本來就只是想做一個德州撲克遊戲，沒想到竟然做了這麼久。

不過因為功能還稱不上是可玩，所以先不放上連結了。
      `,
      photos: [
        "spC-1.jpg",
        "spC-2.jpg"
      ],
      size: "large",
      location: "臺灣"
    }
  ];

  const pages = [...document.querySelectorAll('.page')];
  const navLinks = [...document.querySelectorAll('nav a[data-page]')];
  const menu = document.querySelector('.menu');
  const nav = document.getElementById('siteNav');
  const prevBtn = document.getElementById('prevPostBtn');
  const nextBtn = document.getElementById('nextPostBtn');
  const modalBox = document.getElementById('modalContentBox');
  const locationContainer = document.getElementById('modalLocationContainer');
  pages.forEach(page => { page.querySelector('main').tabIndex = -1; });
  document.querySelector('.skip-link').addEventListener('click', event => {
    event.preventDefault(); document.querySelector('.page.active main').focus();
  });
  const slideCount = document.getElementById('slideCount');
  let currentPageData = posts;
  let currentPageId = 'HOME';
  let lastHandledHash = null;
  let canReturnToList = false;
  let currentPostIdx = 0;
  let current = 0;
  let slides = [];
  let returnFocus = null;
  let touchStart = null;
  let previousOverflow = '';
  const mediaStatus = document.createElement('div');
  mediaStatus.className = 'media-status';
  mediaStatus.setAttribute('role', 'status');
  const mediaMessage = document.createElement('span');
  const retryMedia = document.createElement('button');
  retryMedia.type = 'button'; retryMedia.textContent = '重試載入';
  mediaStatus.append(mediaMessage, retryMedia);
  retryMedia.addEventListener('click', () => {
    const active = slides[current];
    if (!active) return;
    active.dataset.failed = '';
    if (active.tagName === 'VIDEO') {
      delete active.dataset.localFallback;
      active.dataset.src = active.dataset.originalSrc;
      active.src = active.dataset.src;
      active.load(); active.play().catch(() => {});
    }
    else { active.removeAttribute('src'); active.src = active.dataset.src; }
    updateMediaStatus();
  });
  function updateMediaStatus() {
    const active = slides[current];
    const failed = active?.dataset.failed === 'true';
    const ready = !active || (active.tagName === 'VIDEO' ? active.readyState >= 2 : active.complete && active.naturalWidth > 0);
    mediaStatus.hidden = !failed && ready;
    mediaMessage.textContent = failed ? '媒體暫時無法載入。請確認連線或重試。' : '載入中…';
    retryMedia.hidden = !failed;
  }
  const shareButton = document.getElementById('copyPostLink');
  const shareStatus = document.getElementById('shareStatus');
  const shareFallback = document.getElementById('shareFallback');

  function writeHash(hash, mode = 'replace') {
    if (location.hash !== hash) history[mode === 'push' ? 'pushState' : 'replaceState']({page: currentPageId}, '', hash);
    lastHandledHash = location.hash;
  }
  function postHash() {
    return `#${currentPageId}/${currentPageData[currentPostIdx].id}/${current + 1}`;
  }

  function setMenu(open) {
    nav.classList.toggle('open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? '關閉導覽' : '開啟導覽');
  }
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));

  function showPage(requestedPage, historyMode = 'none') {
    const target = pages.find(page => page.id === requestedPage) || pages[0];
    if (modal.getAttribute('aria-hidden') === 'false') closeModal(false);
    pages.forEach(page => {
      const active = page === target;
      page.classList.toggle('active', active);
      page.hidden = !active;
    });
    navLinks.forEach(link => {
      const active = link.dataset.page === target.id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    currentPageId = target.id;
    document.title = `${target.id === 'HOME' ? 'Wei-Chun Chen' : target.id.replace('_', ' ')} | Block`;
    currentPageData = target.id === 'SIDE_PROJECT' ? SideProjects : posts;
    setMenu(false);
    if (historyMode !== 'none') writeHash(`#${target.id}`, historyMode);
    if (historyMode === 'push') window.scrollTo({top: 0, behavior: 'instant'});
  }
  navLinks.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    showPage(link.dataset.page, 'push');
  }));
  function navigateLocation() {
    if (location.hash === lastHandledHash) return;
    const [pageId, postId, slideNumber] = location.hash.slice(1).split('/');
    const target = pages.find(page => page.id === pageId) || pages[0];
    showPage(target.id);
    canReturnToList = false;
    const index = currentPageData.findIndex(post => post.id === postId);
    if (['POST', 'SIDE_PROJECT'].includes(target.id) && postId && index >= 0) {
      const count = currentPageData[index].photos.length;
      const slideIndex = Math.min(Math.max(0, count - 1), Math.max(0, (Number(slideNumber) || 1) - 1));
      openPost(index, {historyMode: 'none', slideIndex: Math.floor(slideIndex)});
      writeHash(postHash());
    } else {
      writeHash(`#${target.id}`);
    }
    lastHandledHash = location.hash;
  }
  window.addEventListener('popstate', navigateLocation);
  window.addEventListener('hashchange', navigateLocation);
  navigateLocation();

  // Search uses complete text while the list keeps its short previews.
  function normalized(value) { return String(value).normalize('NFKC').toLocaleLowerCase(); }
  for (const [pageId, data] of [['POST', posts], ['SIDE_PROJECT', SideProjects]]) {
    const page = document.getElementById(pageId);
    const gallery = page.querySelector('.gallery');
    const form = document.createElement('form');
    form.className = 'post-search';
    form.setAttribute('role', 'search');
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'search';
    input.id = `${pageId}-search`;
    input.placeholder = '搜尋文字、日期或地點';
    label.htmlFor = input.id;
    label.textContent = pageId === 'POST' ? '搜尋貼文' : '搜尋 Side Projects';
    const clear = document.createElement('button');
    clear.type = 'button'; clear.textContent = '清除';
    const status = document.createElement('p');
    status.className = 'search-status'; status.setAttribute('role', 'status');
    const empty = document.createElement('p');
    empty.className = 'search-empty'; empty.textContent = '沒有符合的貼文。試著換一個關鍵字。'; empty.hidden = true;
    const entries = [...gallery.querySelectorAll('.addtext')].map(row => {
      const img = row.querySelector('.cover-img');
      const post = data[Number(img.dataset.index)];
      const full = normalized(`${post.title} ${post.content} ${post.location} ${row.textContent}`);
      const link = document.createElement('a');
      link.className = 'read-post'; link.href = `#${pageId}/${post.id}/1`; link.textContent = '閱讀全文';
      link.setAttribute('aria-haspopup', 'dialog');
      link.addEventListener('click', event => {
        event.preventDefault(); openPost(Number(img.dataset.index));
      });
      row.querySelector('.blocktext').append(link);
      return {row, full};
    });
    const filter = () => {
      const terms = normalized(input.value).trim().split(/\s+/).filter(Boolean);
      let visible = 0;
      entries.forEach(({row, full}) => { row.hidden = !terms.every(term => full.includes(term)); if (!row.hidden) visible++; });
      status.textContent = `顯示 ${visible} / ${entries.length} 篇`;
      empty.hidden = visible > 0;
      clear.disabled = !input.value;
    };
    form.addEventListener('submit', event => event.preventDefault());
    input.addEventListener('input', filter);
    clear.addEventListener('click', () => { input.value = ''; filter(); input.focus(); });
    form.append(label, input, clear, status);
    gallery.before(form, empty);
    filter();
  }

  shareButton.addEventListener('click', async () => {
    const value = location.href;
    shareButton.disabled = true;
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(value);
      if (value !== location.href) return;
      shareStatus.textContent = '連結已複製';
      shareFallback.hidden = true;
    } catch {
      if (value !== location.href) return;
      shareStatus.textContent = '請選取下方連結並複製';
      shareFallback.hidden = false;
      shareFallback.value = value;
      shareFallback.focus(); shareFallback.select();
    } finally { shareButton.disabled = false; }
  });

  document.querySelectorAll('.cover-img').forEach(img => {
    img.setAttribute('role', 'button');
    img.tabIndex = 0;
    img.setAttribute('aria-haspopup', 'dialog');
    const summary = img.closest('.addtext').querySelector('.helloword');
    img.setAttribute('aria-label', `查看貼文：${summary.textContent.trim().slice(0, 45)}`);
    const activate = () => openPost(Number(img.dataset.index));
    img.addEventListener('click', activate);
    img.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activate();
      }
    });
  });

  function pauseVideos() {
    slides.forEach(slide => { if (slide.tagName === 'VIDEO') slide.pause(); });
  }
  function closeModal(updateHistory = true) {
    const wasOpen = modal.getAttribute('aria-hidden') === 'false';
    pauseVideos();
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = previousOverflow;
    prevBtn.style.display = nextBtn.style.display = 'none';
    document.querySelectorAll('header, footer, .page, .skip-link').forEach(el => { el.inert = false; });
    const fallback = document.querySelector(`#${currentPageId} .cover-img[data-index="${currentPostIdx}"]`) || navLinks.find(link => link.dataset.page === currentPageId);
    const focus = returnFocus && returnFocus !== document.body && returnFocus.isConnected && returnFocus.getClientRects().length ? returnFocus : fallback;
    focus?.focus({preventScroll: true});
    document.title = `${currentPageId.replace('_', ' ')} | Block`;
    if (wasOpen && updateHistory) {
      if (canReturnToList) { canReturnToList = false; history.back(); }
      else writeHash(`#${currentPageId}`);
    }
  }
  closeBtn.addEventListener('click', () => closeModal());
  modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
  prevBtn.addEventListener('click', () => openPost(currentPostIdx - 1));
  nextBtn.addEventListener('click', () => openPost(currentPostIdx + 1));

  function changeSlide(index) {
    if (index < 0 || index >= slides.length) return;
    current = index;
    updateSlider();
    shareStatus.textContent = ''; shareFallback.hidden = true;
    if (modal.getAttribute('aria-hidden') === 'false') writeHash(postHash());
  }
  function updateSlider() {
    slides.forEach((el, i) => {
      const active = i === current;
      el.classList.toggle('active', active);
      el.hidden = !active;
      if (active && !el.getAttribute('src')) el.src = el.dataset.src;
      if (el.tagName === 'VIDEO') {
        if (active) el.play().catch(() => {});
        else el.pause();
      }
    });
    modalSlider.querySelectorAll('.indicator-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
      dot.setAttribute('aria-pressed', String(i === current));
    });
    const prev = modalSlider.querySelector('.prev');
    const next = modalSlider.querySelector('.next');
    prev.disabled = current === 0;
    next.disabled = slides.length === 0 || current === slides.length - 1;
    prev.classList.toggle('hidden', prev.disabled);
    next.classList.toggle('hidden', next.disabled);
    slideCount.textContent = slides.length ? `${current + 1} / ${slides.length} 張` : '沒有圖片';
    updateMediaStatus();
    const following = slides[current + 1];
    if (following && following.tagName === 'IMG' && !following.getAttribute('src')) {
      following.src = following.dataset.src;
    }
  }
  function makeArrow(direction, label, action) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `arrow ${direction}`;
    button.setAttribute('aria-label', label);
    const shape = document.createElement('span');
    shape.className = `arrow-shape ${direction === 'prev' ? 'left' : 'right'}`;
    button.append(shape);
    button.addEventListener('click', action);
    return button;
  }
  function renderPostText(target, text) {
    const fragment = document.createDocumentFragment();
    let cursor = 0;
    for (const match of text.matchAll(/https?:\/\/[^\s<>"'，。！？、（）「」]+/g)) {
      const value = match[0];
      let url;
      try {url = new URL(value);} catch {continue;}
      if (!['http:','https:'].includes(url.protocol)) continue;
      fragment.append(document.createTextNode(text.slice(cursor,match.index)));
      const link = document.createElement('a');
      link.href = url.href;link.textContent = value;link.target = '_blank';link.rel = 'noopener noreferrer';
      fragment.append(link);cursor = match.index + value.length;
    }
    fragment.append(document.createTextNode(text.slice(cursor)));
    target.replaceChildren(fragment);
  }
  function openPost(index, {historyMode = 'auto', slideIndex = 0} = {}) {
    if (!Number.isInteger(index) || index < 0 || index >= currentPageData.length) return;
    if (!['POST', 'SIDE_PROJECT'].includes(currentPageId)) showPage('POST');
    const post = currentPageData[index];
    const wasOpen = modal.getAttribute('aria-hidden') === 'false';
    if (!wasOpen) {
      returnFocus = document.activeElement;
      previousOverflow = document.body.style.overflow;
    }
    pauseVideos();
    currentPostIdx = index;
    current = slideIndex;
    shareStatus.textContent = ''; shareFallback.hidden = true;
    modalBox.classList.toggle('large', post.size === 'large');
    modalBox.classList.toggle('small', post.size === 'small');
    document.title = `${post.content.trim().split('\n')[0].slice(0, 70)} | Block`;
    modalTitle.textContent = post.title;
    renderPostText(modalContent, post.content);
    locationContainer.textContent = post.location || '';
    modalSlider.replaceChildren();
    const indicators = document.createElement('div');
    indicators.className = 'indicators';
    indicators.setAttribute('aria-label', '圖片選擇');
    slides = post.photos.map((src, i) => {
      const video = /\.(mp4|mov|webm|avi)(?:[?#]|$)/i.test(src);
      const media = document.createElement(video ? 'video' : 'img');
      media.className = 'slide';
      media.dataset.src = src;
      media.dataset.originalSrc = src;
      media.hidden = true;
      media.addEventListener(video ? 'loadeddata' : 'load', updateMediaStatus);
      media.addEventListener('error', () => {
        if (video && !media.dataset.localFallback) {
          media.dataset.localFallback = 'true';
          media.dataset.src = src.split('/').pop();
          media.src = media.dataset.src;
          if (media === slides[current]) media.play().catch(() => {});
        } else { media.dataset.failed = 'true'; updateMediaStatus(); }
      });
      if (video) {
        media.controls = true;
        media.muted = true;
        media.playsInline = true;
        media.preload = 'none';
      } else {
        media.alt = `貼文圖片 ${i + 1} / ${post.photos.length}`;
        media.decoding = 'async';
      }
      modalSlider.append(media);
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'indicator-dot';
      dot.setAttribute('aria-label', `第 ${i + 1} 張`);
      dot.addEventListener('click', () => changeSlide(i));
      indicators.append(dot);
      return media;
    });
    if (!slides.length) {
      const empty = document.createElement('p');
      empty.className = 'media-empty';
      empty.textContent = '這篇貼文沒有圖片';
      modalSlider.append(empty);
    }
    modalSlider.append(
      makeArrow('prev', '上一張', () => changeSlide(current - 1)),
      makeArrow('next', '下一張', () => changeSlide(current + 1)),
      indicators, mediaStatus
    );
    prevBtn.style.display = index > 0 ? 'flex' : 'none';
    nextBtn.style.display = index < currentPageData.length - 1 ? 'flex' : 'none';
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.querySelectorAll('header, footer, .page, .skip-link').forEach(el => { el.inert = true; });
    modalBox.scrollTop = 0;
    document.querySelector('.post-text-area').scrollTop = 0;
    updateSlider();
    if (historyMode === 'auto') {
      if (!wasOpen) canReturnToList = true;
      writeHash(postHash(), wasOpen ? 'replace' : 'push');
    }
    if (!wasOpen || !document.activeElement.getClientRects().length) closeBtn.focus({preventScroll: true});
  }
  document.querySelectorAll('picture img').forEach(img => {
    const recover = () => {
      const source = img.closest('picture')?.querySelector('source');
      if (source) { source.remove(); img.src = img.getAttribute('src'); }
    };
    img.addEventListener('error', recover);
    // An eager image can fail before DOMContentLoaded installs the listener.
    if (img.complete && img.naturalWidth === 0) recover();
  });
  // Keep the existing public entry point for links or future integrations.
  window.openPost = openPost;

  document.addEventListener('keydown', event => {
    if (modal.getAttribute('aria-hidden') !== 'false') {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menu.focus();
      }
      return;
    }
    if (event.key === 'Escape') { event.preventDefault(); closeModal(); return; }
    if (event.key === 'Tab') {
      const focusable = [prevBtn, nextBtn, ...modal.querySelectorAll('a[href], button, input, video[controls]')]
        .filter(el => !el.disabled && !el.hidden && el.getClientRects().length > 0);
      const index = focusable.indexOf(document.activeElement);
      const next = event.shiftKey ? (index <= 0 ? focusable.length - 1 : index - 1) : (index + 1) % focusable.length;
      event.preventDefault();
      (focusable[next] || modal).focus();
      return;
    }
    if (['VIDEO', 'INPUT', 'TEXTAREA'].includes(event.target.tagName) || event.altKey || event.ctrlKey || event.metaKey) return;
    const actions = {
      ArrowLeft: () => changeSlide(current - 1),
      ArrowRight: () => changeSlide(current + 1),
      ArrowUp: () => openPost(currentPostIdx - 1),
      ArrowDown: () => openPost(currentPostIdx + 1)
    };
    if (actions[event.key]) { event.preventDefault(); actions[event.key](); }
  });
  modalSlider.addEventListener('touchstart', event => {
    const touch = event.touches[0];
    touchStart = event.touches.length === 1 && event.target.tagName !== 'VIDEO'
      ? {x: touch.clientX, y: touch.clientY, time: Date.now()} : null;
  }, {passive: true});
  modalSlider.addEventListener('touchend', event => {
    if (!touchStart || modal.getAttribute('aria-hidden') !== 'false') return;
    const touch = event.changedTouches[0];
    const dx = touchStart.x - touch.clientX;
    const dy = touchStart.y - touch.clientY;
    if (Date.now() - touchStart.time < 500 && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      changeSlide(current + (dx > 0 ? 1 : -1));
    }
    touchStart = null;
  }, {passive: true});
  modalSlider.addEventListener('touchcancel', () => { touchStart = null; }, {passive: true});
});
