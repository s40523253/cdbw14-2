var tipuesearch = {"pages": [{'title': 'About', 'text': '第 2組: \n http://mde.tw/cdbw14-2 \xa0 \n https://github.com/mdecourse/cdbw14-2.git \xa0 \n 40723230 40723215 40723213 40723249 40523253 40723222 40723218 40723209 40723219 40723210 40723250 40623251 \n \n', 'tags': '', 'url': 'About.html'}, {'title': '40723230', 'text': '', 'tags': '', 'url': '40723230.html'}, {'title': '40723215', 'text': '', 'tags': '', 'url': '40723215.html'}, {'title': '40723213', 'text': '網站:https://s40723213.github.io/cd2020/content/index.html 倉儲:https://github.com/s40723213/cd2020 \n IPv6 Ubuntu 對外連線設定 \n 1.VirtualBox勾選2個IPv6，主機網路為NAT Network \n \n \n 2.主機密碼:kmol2020，開啟LXTermial，輸入cd /etc 3.cd apt > cd apt.conf.d > sudo vi proxy.conf  4.按i編輯，輸入proxy設定內容如下Acquire::http::Proxy "http://[2001:288:6004:17::53]:3128"; 5.按ESC並輸入:wq來儲存，sudo apt update來更新aptifconfig為查看網卡信息的各項說明 6.ifconfig > sudo apt install net-tools，cd /etc/netplan 7.sudo vi 00-installer-config.yaml，編輯成如下內容 \n \n 8.輸入sudo netplan apply來更新 9.在VirtualBox新增整體系統的IPv6埠號，如影片中的各4個埠號 10.輸入ifconfig來查詢IPv6的ip，fd17:625c:f037..... (虛擬主機的ipv6) 11.進入cd2020pj1 > git config --global --add http.proxy [2001:288:6004:17::53]:3128 12.git pull，再tmp下sudo vi oauth_scrum.txt 13.sudo vi wsgi.py，將近端的host改為:: ，輸入python3 wsgi.py 14.網址為https://[::1]:18443/alogin ，在開啟cd2020pj1.leo 15.再Nav搜尋allowExt就好了 \n 操作影片', 'tags': '', 'url': '40723213.html'}, {'title': '40723249', 'text': 'Bridged IPv6 遠端控制設定 \n 1.首先設定IPV6的內容 \n 2.在喜好設定設定IPV6參數，記得勾選 \n 3.啟動虛擬主機 輸入密碼 \n 4.cd tmp ->cd cd2020pj1 ->git pull -> ls ->cd docs -> cd cmsimde -> vi wsgi.py \n 5.更改host成自己主機IP \n \n 6.打開putty輸入想要連線的IP並設定 \n 7.OPEN \n 8.輸入帳號密碼kmol2020 \n \n 9.打開XLaunch \n 10.輸入xterm& \n 11.cd tmp ->cd cd2020pj1 ->git pull -> ls ->cd docs -> cd cmsimde -> vi wsgi.py 即可 \n', 'tags': '', 'url': '40723249.html'}, {'title': '40523253', 'text': '', 'tags': '', 'url': '40523253.html'}, {'title': '40723222', 'text': '', 'tags': '', 'url': '40723222.html'}, {'title': '40723218', 'text': '', 'tags': '', 'url': '40723218.html'}, {'title': '40723209', 'text': '', 'tags': '', 'url': '40723209.html'}, {'title': '40723219', 'text': '', 'tags': '', 'url': '40723219.html'}, {'title': '40723210', 'text': 'IPv6 Ubuntu 對外連線設定 \n 必須要先了解 Linux 的輸入法，以及 vi與vim 的指令 1.在VirtualBox先勾選2個IPv6選項，主機網路為NAT Network 2.主機密碼:kmol2020，開啟LXTermial，輸入cd /etc sudo為 使用特殊的權限執行程式。vi為編輯內容 3.cd apt > cd apt.conf.d >\xa0 sudo vi proxy.conf\xa0 4.密碼為kmol2020，按i來編輯，輸入proxy設定內容如下 \n \n \n \n \n \n \n 1 \n \n \n \n Acquire::http::Proxy "http://[2001:288:6004:17::53]:3128"; \n \n \n \n \n \n \n \n 5.按ESC並輸入:wq來儲存，sudo apt update來更新apt ifconfig為查看網卡信息的各項說明 6.ifconfig >\xa0sudo apt install net-tools，cd /etc/netplan 7.sudo vi 00-installer-config.yaml，編輯成如下內容 \xa0 #間格和縮牌都要一樣 \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n \n \n \n network: \n \xa0\xa0\xa0\xa0 ethernets: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 enp0s3: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 dhcp4:  true \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 dhcp6:  true \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 nameservers: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 addresses: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 - 2001:b000:168::11\xa0  \n \xa0\xa0 version: 2 \n \n \n \n \n \n \n \n 8.輸入sudo netplan apply來更新，再輸入ping6 2001:288:6004:17::254來測試連線 9.在 VirtualBox 新增整體系統的IPv6埠號，如影片中的各4個埠號 10.輸入ifconfig來查詢IPv6的ip，fd17:625c:f037..... (虛擬主機的ipv6) 11.進入cd2020pj1 > git config --global --add http.proxy [2001:288:6004:17::53]:3128 12.git pull 更新內容，再tmp下 sudo vi\xa0 oauth_scrum.txt來新增檔案 13.sudo vi wsgi.py，將近端的host改為:: ，輸入python3 wsgi.py 14.網址為https://[::1]:18443/alogin ，在開啟cd2020pj1.leo 15.再Nav搜尋allowExt(後來有更動過位子)，新增一個\'ttt\'檔，重開就可上傳.ttt檔 \n 影片連結: https://youtu.be/2BFxNK5TtEk \n \n \n IPv6\xa0 遠端控制伺服 \n 必須先完成IPv6 Ubuntu 對外連線設定，才可以開始測試IPv6遠端控制 \n 1.打開老師的 ipv6_assignment.txt ，這裡有詳細的ipv6設置說明 2.照著上面的說明，來設定網路的ipv6，7210為乙班10號2為乙班 3.再來設定整體系統的埠號，把Host改為自己的ip，啟動Ubuntn主機 4.進入cd2020pj1，先git pull看看有沒有新版本，在進入docs > cmsimde 5.使用vi wsgi.py來編輯，將host改為自己主機的ip，按i編輯，按esc輸入:wq儲存 6.另一台電腦開啟putty，輸入想遠端要連線的ip \xa0 (記得被連線的主機要關防火牆) 7.都設定好之後，save再open就可以連到該主機，帳號密碼為kmol2020 8.使用XLaunch(為 Xming 軟件)來開啟，直接遠端控制開啟python3 wsgi.py 9.網址是該控制主機的ip加上括號和17443，必須要關掉proxy才可以通 \n 影片連結: https://youtu.be/5NTALa4xvEc \n \n \n \n FileZilla 虛擬主機文件共享 \n 1.下載 FileZilla \xa0 ，將下載好的檔案解壓縮，放入隨身系統 2.啟動Ubuntu主機，確認整體系統的埠號，開啟putty 3.設定ip來連接，跟之前一樣得設定，帳密為kmol2020 4.打開FileZilla，新增一個站台::1，設定SFTP - SSH以及如影片內容 5.密碼koml2020，完成就可以使用上傳下載來編輯比較方便 \n 影片連結: https://youtu.be/Cq5Xv94dYrA \n', 'tags': '', 'url': '40723210.html'}, {'title': '40723250', 'text': '網站 :\xa0 https://s40723250.github.io/cd2020 \n 倉儲 :\xa0 https://github.com/s40723250/cd2020 \n Vrep 虛擬主機設置 \n 1.下載\xa0\xa0 \n https://drive.google.com/file/d/143jFMheM1xjLxhLkSAouThLzj3WUYX6_/view \n https://drive.google.com/file/d/1KlnsgBFyp6OpCC_BlYH-jKL4uJixpoBl/view \n https://www.virtualbox.org/wiki/Download_Old_Builds_6_0 \n 2.開啟VirtualBox ,新增一個NAT網路 →開啟主機網路管理員確認位置 \n \n 3.點選檔案中的匯入將Ubuntu會進去 \n \n 4.點選設定中的網路將附加到改成僅限主機介面卡 \n 5.按啟動 \n \n 6.輸入密碼 : kmol2020 \n 7.點選Activities→開啟LXTerminal \n 8.依序輸入以下指令 xterm& → ls(顯示資料夾) →cd coppeliasim4_rev4 →輸入cd 進入選擇的資料夾 → ./coppeliaSim.sh(開啟Vrep) \n 9.開啟檔案sdc.ttt \n', 'tags': '', 'url': '40723250.html'}, {'title': '40623251', 'text': '', 'tags': '', 'url': '40623251.html'}]};