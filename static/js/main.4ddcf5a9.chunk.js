(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(18),s=n.n(i),c=n(2),o=n(3),u=n(5),l=n(4),d=n(6),h=(n(24),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleShowDetails=function(){n.state.showDetails?n.setState({showDetails:!1}):n.setState({showDetails:!0})},n.state={showDetails:!1},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.event;return a.a.createElement("div",{className:"event"},a.a.createElement("p",null,e.local_time+" - "+e.local_date),a.a.createElement("p",{className:"event-name"},e.name),a.a.createElement("p",null,a.a.createElement("span",{className:"label"},"Group:")," ",e.group.name),a.a.createElement("p",{className:"event-count"},a.a.createElement("span",{className:"label"},"RSVP: "),e.yes_rsvp_count," people are going"),a.a.createElement("p",{className:"event-address"},a.a.createElement("span",{className:"label"},"Address: "),e.venue&&e.venue.address_1+", "+e.venue&&e.venue.city+", "+e.venue&&e.venue.localized_country_name),a.a.createElement("p",{className:"event-venue"},a.a.createElement("span",{className:"label"},"Venue: "),e.venue&&e.venue.name),this.state.showDetails&&a.a.createElement("div",{className:"event-details"},a.a.createElement("hr",null),a.a.createElement("p",{className:"event-description",dangerouslySetInnerHTML:{__html:e.description}}),a.a.createElement("a",{className:"event-link",href:e.link},"Event Page"),a.a.createElement("hr",null)),a.a.createElement("button",{onClick:this.handleShowDetails,className:"show-details"},"Details"))}}]),t}(r.Component)),m=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement(h,{event:e}))})))}}]),t}(r.Component),p=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleInputChanged=function(e){var t=e.target.value;n.setState({numberInput:t}),n.props.updateEvents(null,null,t)},n.state={numberInput:32},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"number-of-events"},a.a.createElement("label",null,"Number of Events"),a.a.createElement("input",{className:"number",type:"number",value:this.state.numberInput,onChange:this.handleInputChanged}))}}]),t}(r.Component),g=n(7),v=n.n(g),b={city:{id:1007700,city:"M\xfcnchen",lat:48.14,lon:11.58,state:"",country:"de",zip:"meetup3",member_count:1257},events:[{created:1563825339e3,duration:9e6,id:"263370107",name:"Microservices mit dem MicroProfile 3.x",rsvp_limit:80,date_in_series_pattern:!1,status:"upcoming",time:15669252e5,local_date:"2019-09-26",local_time:"19:00",updated:1563825339e3,utc_offset:72e5,waitlist_count:79,yes_rsvp_count:80,venue:{id:26266792,name:"adesso AG",lat:53.54524230957031,lon:9.950983047485352,repinned:!1,address_1:"Gro\xdfe Elbstra\xdfe 36",city:"Hamburg",country:"de",localized_country_name:"Deutschland"},group:{created:1387402147e3,name:"Java User Group Hamburg",id:11500362,join_mode:"open",lat:53.54999923706055,lon:10,urlname:"jug-hamburg",who:"Mitglieder",localized_location:"Hamburg, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/jug-hamburg/events/263370107/",description:"<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ",visibility:"public",member_pay_fee:!1},{created:1563825339e3,duration:9e6,id:"263370107",name:"Microservices mit dem MicroProfile 3.x",rsvp_limit:80,date_in_series_pattern:!1,status:"upcoming",time:15669252e5,local_date:"2019-09-27",local_time:"19:00",updated:1563825339e3,utc_offset:72e5,waitlist_count:79,yes_rsvp_count:80,venue:{id:26266792,name:"adesso AG",lat:53.54524230957031,lon:9.950983047485352,repinned:!1,address_1:"Gro\xdfe Elbstra\xdfe 36",city:"Hamburg",country:"de",localized_country_name:"Deutschland"},group:{created:1387402147e3,name:"Java User Group Hamburg",id:11500362,join_mode:"open",lat:53.54999923706055,lon:10,urlname:"jug-hamburg",who:"Mitglieder",localized_location:"Hamburg, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/jug-hamburg/events/263370107/",description:"<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ",visibility:"public",member_pay_fee:!1},{created:1563825339e3,duration:9e6,id:"263370107",name:"Microservices mit dem MicroProfile 3.x",rsvp_limit:80,date_in_series_pattern:!1,status:"upcoming",time:15669252e5,local_date:"2019-09-28",local_time:"19:00",updated:1563825339e3,utc_offset:72e5,waitlist_count:79,yes_rsvp_count:80,venue:{id:26266792,name:"adesso AG",lat:53.54524230957031,lon:9.950983047485352,repinned:!1,address_1:"Gro\xdfe Elbstra\xdfe 36",city:"Hamburg",country:"de",localized_country_name:"Deutschland"},group:{created:1387402147e3,name:"Java User Group Hamburg",id:11500362,join_mode:"open",lat:53.54999923706055,lon:10,urlname:"jug-hamburg",who:"Mitglieder",localized_location:"Hamburg, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/jug-hamburg/events/263370107/",description:"<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ",visibility:"public",member_pay_fee:!1},{created:1563825339e3,duration:9e6,id:"263370107",name:"Microservices mit dem MicroProfile 3.x",rsvp_limit:80,date_in_series_pattern:!1,status:"upcoming",time:15669252e5,local_date:"2019-09-28",local_time:"19:00",updated:1563825339e3,utc_offset:72e5,waitlist_count:79,yes_rsvp_count:80,venue:{id:26266792,name:"adesso AG",lat:53.54524230957031,lon:9.950983047485352,repinned:!1,address_1:"Gro\xdfe Elbstra\xdfe 36",city:"Hamburg",country:"de",localized_country_name:"Deutschland"},group:{created:1387402147e3,name:"Java User Group Hamburg",id:11500362,join_mode:"open",lat:53.54999923706055,lon:10,urlname:"jug-hamburg",who:"Mitglieder",localized_location:"Hamburg, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/jug-hamburg/events/263370107/",description:"<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ",visibility:"public",member_pay_fee:!1}]},f=n(8),w=n.n(f);function k(e,t,n){var r,a,i;return v.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(!window.location.href.startsWith("http://localhost")){s.next=2;break}return s.abrupt("return",b.events);case 2:return s.next=4,v.a.awrap(E());case 4:if(!(r=s.sent)){s.next=13;break}return a="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+r,e&&t&&(a+="&lat="+e+"&lon="+t),n&&(a+="&page="+n),s.next=11,v.a.awrap(w.a.get(a));case 11:return i=s.sent,s.abrupt("return",i.data.events);case 13:case"end":return s.stop()}}))}function E(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t?_("get",t):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=vg5u9rql438ddl39c9dls308rt&response_type=code&redirect_uri=https://envincebal.github.io/meetup/",null)}var n=localStorage.getItem("last_saved_time");return e&&Date.now()-n<36e5?e:_("renew",localStorage.getItem("refresh_token"))}function _(e,t){var n,r;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return"get"===e?n="https://onx76mwsx0.execute-api.us-west-2.amazonaws.com/dev/api/token/"+t:"renew"===e&&(n="https://onx76mwsx0.execute-api.us-west-2.amazonaws.com/dev/api/refresh/"+t),a.next=3,v.a.awrap(w.a.get(n));case 3:return r=a.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),a.abrupt("return",r.data.access_token);case 8:case"end":return a.stop()}}))}var y=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),function(e){var t,n,r;return v.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.location.href.startsWith("http://localhost")){a.next=2;break}return a.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return a.next=4,v.a.awrap(E());case 4:if(!(t=a.sent)){a.next=11;break}return n="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+e+"&access_token="+t,a.next=9,v.a.awrap(w.a.get(n));case 9:return r=a.sent,a.abrupt("return",r.data);case 11:return a.abrupt("return",[]);case 12:case"end":return a.stop()}}))}(t).then((function(e){n.setState({suggestions:e})}))},n.handleItemClicked=function(e,t,r){n.setState({query:e,suggestions:[]}),n.props.updateEvents(t,r)},n.state={query:"",suggestions:[]},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"city-search"},a.a.createElement("label",null,"Search City"),a.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),a.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return a.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),t}(r.Component),z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).updateEvents=function(e,t,r){e&&t?k(e,t,n.state.page).then((function(r){n.setState({events:r,lat:e,lon:t})})):r?k(n.state.lat,n.state.lon,r).then((function(e){n.setState({events:e,page:r})})):k(n.state.lat,n.state.lon,n.state.page).then((function(e){return n.setState({events:e})}))},n.state={events:[],lat:null,lon:null,page:null},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.updateEvents()}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(y,{updateEvents:this.updateEvents}),a.a.createElement(p,{updateEvents:this.updateEvents}),a.a.createElement(m,{events:this.state.events}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.4ddcf5a9.chunk.js.map