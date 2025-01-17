// 获取ip
function getIpInfo(){
    var fetchUrl = "https://api.nsmao.net/api/ipv4/query?key=ek5UQ9qOSZd8VU3vyFWp9ejWBn" //https://api.nsmao.net获取key
    fetch(fetchUrl)
      .then(res => res.json())
      .then(json =>{
        var country = json.data.country || "未能获取到信息";
        var ip = json.data.ip || "未能获取到信息";
        var province = json.data.province || "未能获取到信息";
        var city = json.data.city || "未能获取到信息";
        var isp = json.data.isp || "未能获取到信息";
  
        document.getElementById("userAgentIp").innerHTML = ip;
        document.getElementById("userAgentCountry").innerHTML = country;
        document.getElementById("userAgentProv").innerHTML = province;
        document.getElementById("userAgentCity").innerHTML = city;
        document.getElementById("userAgentISP").innerHTML = isp;
  
        // 使用ua-parser-js解析User-Agent
        var parser = new UAParser();
        var result = parser.getResult();
        document.getElementById("userAgentOS").innerHTML = result.os.name + " " + result.os.version;
        document.getElementById("userAgentBrowser").innerHTML = result.browser.name + " " + result.browser.version;
      })
  }
  
getIpInfo()
  
  
// (async function() {
//     async function getIpInfo() {
//         var fetchUrl = "https://api.qjqq.cn/api/Local";
//         try {
//             var response = await fetch(fetchUrl);
//             var json = await response.json();

//             var ip = json.ip;
//             var country = json.data.country;
//             var prov = json.data.prov;
//             var city = json.data.city;
//             var isp = json.data.isp;

//             document.getElementById("userAgentIp").innerHTML = ip;
//             document.getElementById("userAgentCountry").innerHTML = country;
//             document.getElementById("userAgentProv").innerHTML = prov;
//             document.getElementById("userAgentCity").innerHTML = city;
//             document.getElementById("userAgentISP").innerHTML = isp;
            

//             var uaInfo = navigator.userAgent;

//             document.getElementById("userAgentDevice").innerHTML = uaInfo;
//         } catch (error) {
//             console.error("An error occurred while fetching IP info:", error);
//         }
//     }

//     await getIpInfo();
// })();