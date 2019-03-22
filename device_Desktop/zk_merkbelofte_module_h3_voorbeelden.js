if (window.VarCurrentView) VarCurrentView.set('Desktop');
function init_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_Desktop() {
	if ( rcdObj.view != 'Desktop' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
og4.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og4",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
shape80.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1368 691\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(684 345.5)\" style=\"\">\n	<path d=\"M 0 0 L 1367 0 L 1367 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(214, 239, 240); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683.5, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(684 345.5)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: -0.5px; top: 77.5px; width: 1368px; height: 691px; z-index: 2; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj80",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Blue bg"
	},
	objData:	{"a":[0,1056,0,[-0.5000000000006821,77.50000000000102,1368,691]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1368,"height":691},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape80.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
shape79.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 78\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 39)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 78 L 0 78 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -39) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 39)\">\n		<text font-family=\"Verdana\" font-size=\"-19.9999995\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(125,96,62); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.3\" fill=\"#7D603E\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 0px; top: 1.02318e-12px; width: 1366px; height: 78px; z-index: 3; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj79",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Header"
	},
	objData:	{"a":[0,32,0,[0,1.0231815394945443e-12,1366,78]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":0,"width":1366,"height":78},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape79.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton77.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 150 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(75 29)\" style=\"\">\n	<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_148_24_767\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_24_767&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(75 29)\">\n		<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 1202px; top: 10px; width: 150px; height: 58px; z-index: 30; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj77",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button sluit",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkExitClose',actItem:function(){ {cleanupTitle('zk_merkbelofte.html'); trivExitPage('ObjLayerActionExit()',false);} 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[1202,10.000000000000107,150,58]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1202,"y":10,"width":150,"height":58},"imgDataNormal":"images/desktop_shape77.png","imgDataOver":"images/desktop_shape77.png","imgDataDown":"images/desktop_shape77.png","imgDataDisabled":"images/desktop_shape77_disabled.png","svgDataNormal":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_24_767\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_24_767&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_24_769\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_24_769&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_24_771\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_24_771&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(75 29)\" style=\"\">\n\t<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_24_773\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"150\" height=\"58\" xlink:href=\"images/Button_sluit_groot.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 150 0 L 150 58 L 0 58 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_24_773&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-75, -29) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(75 29)\">\n\t\t<text font-family=\"Lucida Sans Unicode\" font-size=\"-21.3333328\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"-6.72\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text92.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 403px; min-height: 77px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 393px; min-height: 67px;\"><p style=\"margin-left: 0px; text-indent: 0px; margin-top: 0px; margin-bottom: 0px; text-align: center;\"><strong><span style=\"font-size: 16pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 104, 189);\">Gezondheid dichterbij voor iedereen</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 482px; top: 7px; width: 403px; height: 77px; z-index: 4;",
	cssClasses:	"header-module-title",
	htmlId:		"tobj92",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Module title"
	},
	objData:	{"a":[0,32,0,[482,7,403,77]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":482,"y":7,"width":403,"height":77},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image76.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj76Img\" src=\"images/Logo-ZK.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 134px; height: 41px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 21px; top: 19px; width: 134px; height: 41px; z-index: 5;",
	cssClasses:	"",
	htmlId:		"tobj76",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Logo-ZK"
	},
	objData:	{"a":[0,288,0,[21,19,134,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":21,"y":19,"width":134,"height":41}}
};
image134.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj134Img\" src=\"images/H1_disabled.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 496px; height: 107px;\">",
	cssText:	"visibility: inherit; position: absolute; left: -21px; top: 683px; width: 496px; height: 107px; z-index: 6;",
	cssClasses:	"",
	htmlId:		"tobj134",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H1_disabled"
	},
	objData:	{"a":[0,288,0,[-21,683,496,107]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":-21,"y":683,"width":496,"height":107}}
};
image133.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj133Img\" src=\"images/H2_disabled.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 496px; height: 107px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 435px; top: 683px; width: 496px; height: 107px; z-index: 7;",
	cssClasses:	"",
	htmlId:		"tobj133",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H2_disabled"
	},
	objData:	{"a":[0,288,0,[435,683,496,107]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":435,"y":683,"width":496,"height":107}}
};
image129.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj129Img\" src=\"images/H3_highlight.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 496px; height: 107px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 891px; top: 683px; width: 496px; height: 107px; z-index: 8;",
	cssClasses:	"",
	htmlId:		"tobj129",
	bInsAnc:	0,
	cwObj:		{
		"name":	"H3_highlight"
	},
	objData:	{"a":[0,288,0,[891,683,496,107]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":891,"y":683,"width":496,"height":107}}
};
og1854.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og1854",
	bInsAnc:	undefined,
	objData:	{"a":[0,32,0,[]],"bReadLast":false}
};
image1834.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj1834Img\" src=\"images/Voorbeelden_Actify.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 243px; height: 133px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 153px; top: 123px; width: 243px; height: 133px; z-index: 9;",
	cssClasses:	"",
	htmlId:		"tobj1834",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Voorbeelden_Actify"
	},
	objData:	{"a":[0,288,0,[153,123,243,133]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":153,"y":123,"width":243,"height":133}}
};
text1875.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 47px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 190px; min-height: 37px;\"><p style=\"text-align:left\"><strong><span style=\"font-size: 16pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web&quot;, sans-serif;\">Actify</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 167px; top: 211px; width: 200px; height: 47px; z-index: 10;",
	cssClasses:	"voorbeelden-hotspot-txt",
	htmlId:		"tobj1875",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[167,211,200,47]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":167,"y":211,"width":200,"height":47},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image1836.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj1836Img\" src=\"images/Voorbeelden_hartwacht.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 578px; height: 133px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 395px; top: 123px; width: 578px; height: 133px; z-index: 11;",
	cssClasses:	"",
	htmlId:		"tobj1836",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Voorbeelden_hartwacht"
	},
	objData:	{"a":[0,288,0,[395,123,578,133]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":395,"y":123,"width":578,"height":133}}
};
text1883.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 47px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 190px; min-height: 37px;\"><p style=\"text-align:left\"><strong><span style=\"font-size: 16pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web&quot;, &quot;Titillium Web&quot;;\">Hartwacht</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 410px; top: 211px; width: 200px; height: 47px; z-index: 12;",
	cssClasses:	"voorbeelden-hotspot-txt",
	htmlId:		"tobj1883",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[410,211,200,47]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":410,"y":211,"width":200,"height":47},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image1838.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj1838Img\" src=\"images/Voorbeelden_zilverkorting.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 242px; height: 133px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 972px; top: 123px; width: 242px; height: 133px; z-index: 13;",
	cssClasses:	"",
	htmlId:		"tobj1838",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Voorbeelden_zilverkorting"
	},
	objData:	{"a":[0,288,0,[972,123,242,133]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":972,"y":123,"width":242,"height":133}}
};
text1887.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 47px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 190px; min-height: 37px;\"><p style=\"text-align:left\"><strong><span style=\"font-size: 16pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web&quot;, sans-serif;\">Zilverkorting</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 984px; top: 211px; width: 200px; height: 47px; z-index: 14;",
	cssClasses:	"voorbeelden-hotspot-txt",
	htmlId:		"tobj1887",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[984,211,200,47]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":984,"y":211,"width":200,"height":47},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image1840.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj1840Img\" src=\"images/Voorbeelden_thuisconsult.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 531px; height: 133px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 153px; top: 255px; width: 531px; height: 133px; z-index: 15;",
	cssClasses:	"",
	htmlId:		"tobj1840",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Voorbeelden_thuisconsult"
	},
	objData:	{"a":[0,288,0,[153,255,531,133]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":153,"y":255,"width":531,"height":133}}
};
text1879.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 344px; min-height: 47px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 334px; min-height: 37px;\"><p style=\"text-align:left\"><strong><span style=\"font-size: 16pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web&quot;, &quot;Titillium Web&quot;;\">Thuisconsult voor COPD patienten</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 167px; top: 344px; width: 344px; height: 47px; z-index: 16;",
	cssClasses:	"voorbeelden-hotspot-txt",
	htmlId:		"tobj1879",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[167,344,344,47]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":167,"y":344,"width":344,"height":47},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image1842.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj1842Img\" src=\"images/Voorbeelden_zorgbemiddeling.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 531px; height: 133px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 683px; top: 255px; width: 531px; height: 133px; z-index: 17;",
	cssClasses:	"",
	htmlId:		"tobj1842",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Voorbeelden_zorgbemiddeling"
	},
	objData:	{"a":[0,288,0,[683,255,531,133]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":683,"y":255,"width":531,"height":133}}
};
text1891.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 47px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 190px; min-height: 37px;\"><p style=\"text-align:left\"><strong><span style=\"font-size: 16pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web&quot;, &quot;Titillium Web&quot;;\">Zorgbemiddeling</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 698px; top: 344px; width: 200px; height: 47px; z-index: 18;",
	cssClasses:	"voorbeelden-hotspot-txt",
	htmlId:		"tobj1891",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[698,344,200,47]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":698,"y":344,"width":200,"height":47},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image1844.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj1844Img\" src=\"images/Voorbeelden_chemo.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 243px; height: 133px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 153px; top: 387px; width: 243px; height: 133px; z-index: 19;",
	cssClasses:	"",
	htmlId:		"tobj1844",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Voorbeelden_chemo"
	},
	objData:	{"a":[0,288,0,[153,387,243,133]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":153,"y":387,"width":243,"height":133}}
};
text1895.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 63px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 190px; min-height: 53px;\"><p style=\"text-align:left\"><strong><span style=\"font-size: 16pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web&quot;, sans-serif;\">Chemotherapie</span></strong></p>\n\n<p style=\"text-align:left\"><strong><span style=\"font-size: 16pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web&quot;, sans-serif;\">thuis</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 167px; top: 456px; width: 200px; height: 63px; z-index: 20;",
	cssClasses:	"voorbeelden-hotspot-txt",
	htmlId:		"tobj1895",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[167,456,200,63]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":167,"y":456,"width":200,"height":63},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image1846.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj1846Img\" src=\"images/Voorbeelden_gezond%20ondernemen.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 578px; height: 133px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 395px; top: 387px; width: 578px; height: 133px; z-index: 21;",
	cssClasses:	"",
	htmlId:		"tobj1846",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Voorbeelden_gezond ondernemen"
	},
	objData:	{"a":[0,288,0,[395,387,578,133]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":395,"y":387,"width":578,"height":133}}
};
text1899.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 333px; min-height: 47px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 323px; min-height: 37px;\"><p style=\"text-align:left\"><strong><span style=\"font-size: 16pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web&quot;, sans-serif;\">Gezond ondernemen</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 410px; top: 477px; width: 333px; height: 47px; z-index: 22;",
	cssClasses:	"voorbeelden-hotspot-txt",
	htmlId:		"tobj1899",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[410,477,333,47]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":410,"y":477,"width":333,"height":47},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image1848.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj1848Img\" src=\"images/Voorbeelden_alles%20ok.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 242px; height: 133px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 972px; top: 387px; width: 242px; height: 133px; z-index: 23;",
	cssClasses:	"",
	htmlId:		"tobj1848",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Voorbeelden_alles ok"
	},
	objData:	{"a":[0,288,0,[972,387,242,133]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":972,"y":387,"width":242,"height":133}}
};
text1903.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 47px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 190px; min-height: 37px;\"><p style=\"text-align:left\"><strong><span style=\"font-size: 16pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web&quot;, sans-serif;\">Alles oké</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 984px; top: 477px; width: 200px; height: 47px; z-index: 24;",
	cssClasses:	"voorbeelden-hotspot-txt",
	htmlId:		"tobj1903",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[984,477,200,47]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":984,"y":477,"width":200,"height":47},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image1850.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj1850Img\" src=\"images/Voorbeelden_zorg%20veilig%20thuis.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 531px; height: 133px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 153px; top: 519px; width: 531px; height: 133px; z-index: 25;",
	cssClasses:	"",
	htmlId:		"tobj1850",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Voorbeelden_zorg veilig thuis"
	},
	objData:	{"a":[0,288,0,[153,519,531,133]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":153,"y":519,"width":531,"height":133}}
};
text1907.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 200px; min-height: 47px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 190px; min-height: 37px;\"><p style=\"text-align:left\"><strong><span style=\"font-size: 16pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web&quot;, sans-serif;\">Zorg veilig thuis</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 167px; top: 608px; width: 200px; height: 47px; z-index: 26;",
	cssClasses:	"voorbeelden-hotspot-txt",
	htmlId:		"tobj1907",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[167,608,200,47]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":167,"y":608,"width":200,"height":47},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
image1852.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj1852Img\" src=\"images/Voorbeelden_hulp%20bij%20betaling.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 531px; height: 133px;\">",
	cssText:	"visibility: inherit; position: absolute; left: 683px; top: 519px; width: 531px; height: 133px; z-index: 27;",
	cssClasses:	"",
	htmlId:		"tobj1852",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Voorbeelden_hulp bij betaling"
	},
	objData:	{"a":[0,288,0,[683,519,531,133]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":683,"y":519,"width":531,"height":133}}
};
text1911.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 300px; min-height: 65px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 5px; top: 5px; width: 290px; min-height: 55px;\"><p style=\"text-align:left\"><strong><span style=\"font-size: 16pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web&quot;, sans-serif;\">Vroegtijdige hulp bij</span></strong></p>\n\n<p style=\"text-align:left\"><strong><span style=\"font-size: 16pt; color: rgb(255, 255, 255); font-family: &quot;Titillium Web&quot;, sans-serif;\">betalingsachterstanden</span></strong></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 698px; top: 584px; width: 300px; height: 65px; z-index: 28;",
	cssClasses:	"voorbeelden-hotspot-txt",
	htmlId:		"tobj1911",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Text Block 1"
	},
	objData:	{"a":[0,32,0,[698,584,300,65]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":698,"y":584,"width":300,"height":65},"dwTextFlags":0,"marginSize":5,"textPublishLang":"Inherit"}
};
textbutton1945.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 241 132\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(120.5 66)\" style=\"\">\n	<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_148_855\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_855&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(120.5 66)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 153px; top: 123px; width: 241px; height: 132px; z-index: 31; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1945",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button Actify",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1855.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[153,123.00000000000003,241,132]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":153,"y":123,"width":241,"height":132},"imgDataNormal":"images/desktop_shape1945.png","imgDataOver":"images/desktop_shape1945_over.png","imgDataDown":"images/desktop_shape1945.png","imgDataDisabled":"images/desktop_shape1945.png","svgDataNormal":"<g transform=\"translate(120.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_855\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_855&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(120.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(120.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_857\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_border.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_857&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(120.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(120.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_859\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_859&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(120.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(120.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_861\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_861&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(120.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1947.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 241 132\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(120.5 66)\" style=\"\">\n	<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_148_863\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_863&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(120.5 66)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 973px; top: 123px; width: 241px; height: 132px; z-index: 32; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1947",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button Zilverkorting",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2000.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[973,123.00000000000003,241,132]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":973,"y":123,"width":241,"height":132},"imgDataNormal":"images/desktop_shape1945.png","imgDataOver":"images/desktop_shape1945_over.png","imgDataDown":"images/desktop_shape1945.png","imgDataDisabled":"images/desktop_shape1945.png","svgDataNormal":"<g transform=\"translate(120.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_863\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_863&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(120.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(120.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_865\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_border.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_865&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(120.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(120.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_867\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_867&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(120.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(120.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_869\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_869&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(120.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1952.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 241 132\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(120.5 66)\" style=\"\">\n	<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_148_871\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_871&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(120.5 66)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 153px; top: 387px; width: 241px; height: 132px; z-index: 33; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1952",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button Chemo",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2010.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[153,387,241,132]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":153,"y":387,"width":241,"height":132},"imgDataNormal":"images/desktop_shape1945.png","imgDataOver":"images/desktop_shape1945_over.png","imgDataDown":"images/desktop_shape1945.png","imgDataDisabled":"images/desktop_shape1945.png","svgDataNormal":"<g transform=\"translate(120.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_871\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_871&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(120.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(120.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_873\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_border.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_873&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(120.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(120.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_875\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_875&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(120.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(120.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_877\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_877&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(120.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1957.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 241 132\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(120.5 66)\" style=\"\">\n	<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_148_879\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_879&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(120.5 66)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 972px; top: 387px; width: 241px; height: 132px; z-index: 34; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1957",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button Alles OK",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2174.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[972,387,241,132]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":972,"y":387,"width":241,"height":132},"imgDataNormal":"images/desktop_shape1945.png","imgDataOver":"images/desktop_shape1945_over.png","imgDataDown":"images/desktop_shape1945.png","imgDataDisabled":"images/desktop_shape1945.png","svgDataNormal":"<g transform=\"translate(120.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_879\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_879&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(120.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(120.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_881\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_border.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_881&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(120.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(120.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_883\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_883&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(120.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(120.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_885\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"241\" height=\"132\" xlink:href=\"images/Hotspot%20area%201_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 241 0 L 241 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_885&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-120.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(120.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1962.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 530 132\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(265 66)\" style=\"\">\n	<path d=\"M 0 0 L 530 0 L 530 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-265, -66) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_148_887\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"530\" height=\"132\" xlink:href=\"images/Hotspot%20area%202_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 530 0 L 530 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_887&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-265, -66) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(265 66)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 153px; top: 255px; width: 530px; height: 132px; z-index: 35; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1962",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button Thuisconsult",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2034.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[153,255.00000000000006,530,132]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":153,"y":255,"width":530,"height":132},"imgDataNormal":"images/desktop_shape1962.png","imgDataOver":"images/desktop_shape1962_over.png","imgDataDown":"images/desktop_shape1962.png","imgDataDisabled":"images/desktop_shape1962.png","svgDataNormal":"<g transform=\"translate(265 66)\" style=\"\">\n\t<path d=\"M 0 0 L 530 0 L 530 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_887\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"530\" height=\"132\" xlink:href=\"images/Hotspot%20area%202_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 530 0 L 530 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_887&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(265 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(265 66)\" style=\"\">\n\t<path d=\"M 0 0 L 530 0 L 530 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_889\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"530\" height=\"132\" xlink:href=\"images/Hotspot%20area%202_border.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 530 0 L 530 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_889&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(265 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(265 66)\" style=\"\">\n\t<path d=\"M 0 0 L 530 0 L 530 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_891\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"530\" height=\"132\" xlink:href=\"images/Hotspot%20area%202_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 530 0 L 530 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_891&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(265 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(265 66)\" style=\"\">\n\t<path d=\"M 0 0 L 530 0 L 530 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-265, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_893\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"530\" height=\"132\" xlink:href=\"images/Hotspot%20area%202_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 530 0 L 530 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_893&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-265, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(265 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1966.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 531 132\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(265.5 66)\" style=\"\">\n	<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_148_895\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"531\" height=\"132\" xlink:href=\"images/Hotspot%20area%202_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_895&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(265.5 66)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 683px; top: 255px; width: 531px; height: 132px; z-index: 36; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1966",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button Zorgbemiddeling",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2189.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[683,255.00000000000006,531,132]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":683,"y":255,"width":531,"height":132},"imgDataNormal":"images/desktop_shape1966.png","imgDataOver":"images/desktop_shape1966_over.png","imgDataDown":"images/desktop_shape1966.png","imgDataDisabled":"images/desktop_shape1966.png","svgDataNormal":"<g transform=\"translate(265.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_895\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"531\" height=\"132\" xlink:href=\"images/Hotspot%20area%202_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_895&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(265.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(265.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_897\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"531\" height=\"132\" xlink:href=\"images/Hotspot%20area%202_border.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_897&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(265.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(265.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_899\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"531\" height=\"132\" xlink:href=\"images/Hotspot%20area%202_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_899&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(265.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(265.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_901\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"531\" height=\"132\" xlink:href=\"images/Hotspot%20area%202_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_901&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(265.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1971.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 531 133\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(265.5 66.5)\" style=\"\">\n	<path d=\"M 0 0 L 531 0 L 531 133 L 0 133 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66.5) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_148_903\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"531\" height=\"133\" xlink:href=\"images/Hotspot%20area%202_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 531 0 L 531 133 L 0 133 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_903&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(265.5 66.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 153px; top: 519px; width: 531px; height: 133px; z-index: 37; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1971",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button Zorg veilig thuis",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2048.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[153,519.0000000000001,531,133]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":153,"y":519,"width":531,"height":133},"imgDataNormal":"images/desktop_shape1971.png","imgDataOver":"images/desktop_shape1971_over.png","imgDataDown":"images/desktop_shape1971.png","imgDataDisabled":"images/desktop_shape1971.png","svgDataNormal":"<g transform=\"translate(265.5 66.5)\" style=\"\">\n\t<path d=\"M 0 0 L 531 0 L 531 133 L 0 133 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_903\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"531\" height=\"133\" xlink:href=\"images/Hotspot%20area%202_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 531 0 L 531 133 L 0 133 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_903&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(265.5 66.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(265.5 66.5)\" style=\"\">\n\t<path d=\"M 0 0 L 531 0 L 531 133 L 0 133 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_905\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"531\" height=\"133\" xlink:href=\"images/Hotspot%20area%202_border.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 531 0 L 531 133 L 0 133 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_905&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(265.5 66.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(265.5 66.5)\" style=\"\">\n\t<path d=\"M 0 0 L 531 0 L 531 133 L 0 133 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_907\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"531\" height=\"133\" xlink:href=\"images/Hotspot%20area%202_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 531 0 L 531 133 L 0 133 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_907&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(265.5 66.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(265.5 66.5)\" style=\"\">\n\t<path d=\"M 0 0 L 531 0 L 531 133 L 0 133 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66.5) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_909\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"531\" height=\"133\" xlink:href=\"images/Hotspot%20area%202_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 531 0 L 531 133 L 0 133 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_909&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(265.5 66.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1976.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 531 132\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(265.5 66)\" style=\"\">\n	<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_148_911\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"531\" height=\"132\" xlink:href=\"images/Hotspot%20area%202_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_911&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(265.5 66)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 683px; top: 519px; width: 531px; height: 132px; z-index: 38; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1976",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button Vroegtijdige hulp",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2080.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[683,519.0000000000001,531,132]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":683,"y":519,"width":531,"height":132},"imgDataNormal":"images/desktop_shape1966.png","imgDataOver":"images/desktop_shape1966_over.png","imgDataDown":"images/desktop_shape1966.png","imgDataDisabled":"images/desktop_shape1966.png","svgDataNormal":"<g transform=\"translate(265.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_911\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"531\" height=\"132\" xlink:href=\"images/Hotspot%20area%202_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_911&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(265.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(265.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_913\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"531\" height=\"132\" xlink:href=\"images/Hotspot%20area%202_border.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_913&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(265.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(265.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_915\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"531\" height=\"132\" xlink:href=\"images/Hotspot%20area%202_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_915&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(265.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(265.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_917\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"531\" height=\"132\" xlink:href=\"images/Hotspot%20area%202_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 531 0 L 531 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_917&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-265.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(265.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1981.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 579 132\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(289.5 66)\" style=\"\">\n	<path d=\"M 0 0 L 579 0 L 579 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-289.5, -66) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_148_919\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"579\" height=\"132\" xlink:href=\"images/Hotspot%20area%203_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 579 0 L 579 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_919&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-289.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(289.5 66)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 393px; top: 123px; width: 579px; height: 132px; z-index: 39; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1981",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button Hartwacht",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og1990.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[393,123.00000000000007,579,132]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":393,"y":123,"width":579,"height":132},"imgDataNormal":"images/desktop_shape1981.png","imgDataOver":"images/desktop_shape1981_over.png","imgDataDown":"images/desktop_shape1981.png","imgDataDisabled":"images/desktop_shape1981.png","svgDataNormal":"<g transform=\"translate(289.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 579 0 L 579 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-289.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_919\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"579\" height=\"132\" xlink:href=\"images/Hotspot%20area%203_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 579 0 L 579 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_919&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-289.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(289.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(289.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 579 0 L 579 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-289.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_921\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"579\" height=\"132\" xlink:href=\"images/Hotspot%20area%203_border.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 579 0 L 579 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_921&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-289.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(289.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(289.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 579 0 L 579 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-289.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_923\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"579\" height=\"132\" xlink:href=\"images/Hotspot%20area%203_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 579 0 L 579 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_923&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-289.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(289.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(289.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 579 0 L 579 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-289.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_925\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"579\" height=\"132\" xlink:href=\"images/Hotspot%20area%203_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 579 0 L 579 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_925&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-289.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(289.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1985.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 577 132\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(288.5 66)\" style=\"\">\n	<path d=\"M 0 0 L 577 0 L 577 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-288.5, -66) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_148_927\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"577\" height=\"132\" xlink:href=\"images/Hotspot%20area%203_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 577 0 L 577 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_927&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-288.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(288.5 66)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 395px; top: 387px; width: 577px; height: 132px; z-index: 40; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1985",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Button Gezond ondernemen",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkShow',actItem:function(){ og2064.show(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[395,387.00000000000006,577,132]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":395,"y":387,"width":577,"height":132},"imgDataNormal":"images/desktop_shape1985.png","imgDataOver":"images/desktop_shape1985_over.png","imgDataDown":"images/desktop_shape1985.png","imgDataDisabled":"images/desktop_shape1985.png","svgDataNormal":"<g transform=\"translate(288.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 577 0 L 577 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-288.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_927\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"577\" height=\"132\" xlink:href=\"images/Hotspot%20area%203_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 577 0 L 577 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_927&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-288.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(288.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(288.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 577 0 L 577 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-288.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_929\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"577\" height=\"132\" xlink:href=\"images/Hotspot%20area%203_border.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 577 0 L 577 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_929&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-288.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(288.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(288.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 577 0 L 577 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-288.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_931\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"577\" height=\"132\" xlink:href=\"images/Hotspot%20area%203_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 577 0 L 577 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_931&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-288.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(288.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(288.5 66)\" style=\"\">\n\t<path d=\"M 0 0 L 577 0 L 577 132 L 0 132 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-288.5, -66) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_933\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"577\" height=\"132\" xlink:href=\"images/Hotspot%20area%203_invisible.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 577 0 L 577 132 L 0 132 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_933&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-288.5, -66) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(288.5 66)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton1778.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_148_935\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_935&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 38px; top: 375px; width: 34px; height: 34px; z-index: 41; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1778",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Vorige",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_merkbelofte_module_h3_open_vraag.html',false,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[38,375,34,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":38,"y":375,"width":34,"height":34},"imgDataNormal":"images/desktop_shape1338.png","imgDataOver":"images/desktop_shape1338_over.png","imgDataDown":"images/desktop_shape1338.png","imgDataDisabled":"images/desktop_shape1338_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_935\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_935&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_937\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_937&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_939\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_939&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_941\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_vorige.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_941&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton2101.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 34 34\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(17 17)\" style=\"\">\n	<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_148_943\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_943&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(17 17)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: inherit; position: absolute; left: 1295px; top: 376px; width: 34px; height: 34px; z-index: 42; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2101",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Volgende",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('zk_merkbelofte_module_h3_telefoon.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,33120,0,[1295,376,34,34]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":1295,"y":376,"width":34,"height":34},"imgDataNormal":"images/desktop_shape268.png","imgDataOver":"images/desktop_shape268_over.png","imgDataDown":"images/desktop_shape268.png","imgDataDisabled":"images/desktop_shape268_disabled.png","svgDataNormal":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_943\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_943&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_945\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende_hover.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_945&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_947\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_947&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(17 17)\" style=\"\">\n\t<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_148_949\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"34\" height=\"34\" xlink:href=\"images/Button_volgende.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 0 0 L 34 0 L 34 34 L 0 34 L 0 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_148_949&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-17, -17) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(17 17)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","fallbackImg":"<img alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
og1855.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og1855",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape1856.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 43; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1856",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Overlay",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1855.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape738.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
image1870.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj1870Img\" src=\"images/Voorbeelden_Actify.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 243px; height: 133px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 153px; top: 123px; width: 243px; height: 133px; z-index: 44; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj1870",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Voorbeelden_Actify",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1855.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[153,123,243,133]],"shadoweffect":{"opacity":"0.25","depth":0,"color":"#000000","blurradius":15,"shadowtype":2,"bHasShadow":true,"dir":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":153,"y":123,"width":243,"height":133}}
};
shape1860.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 384 265\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(192 132.5)\" style=\"\">\n	<path d=\"M 5.7 0 L 378.3 0 A 5.7 5.7 0 0 1 384 5.7 L 384 259.3 A 5.7 5.7 0 0 1 378.3 265 L 5.7 265 A 5.7 5.7 0 0 1 0 259.3 L 0 5.7 A 5.7 5.7 0 0 1 5.7 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-192, -132.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(192 132.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 312px; top: 222px; width: 384px; height: 265px; z-index: 45; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1860",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[312,222.00000000000006,384,265]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":312,"y":222,"width":384,"height":265},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1860.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text1864.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 317px; min-height: 163px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 317px; min-height: 163px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;; font-size: 12pt; color: rgb(0, 40, 87);\">Actify is een app van Zilveren Kruis om mensen te helpen om stap voor stap gezonder te leven. Met spannende missies daagt de Actify Bewegen app mensen uit om meer te bewegen. Heb jij Actify al op je telefoon staan? </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 352px; top: 312px; width: 317px; height: 163px; z-index: 46;",
	cssClasses:	"hotspot-body",
	htmlId:		"tobj1864",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[352,312,317,163]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":352,"y":312,"width":317,"height":163},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text1866.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 317px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 317px; min-height: 41px;\"><p style=\"text-align:left\"><span style=\"font-size: 18pt; font-family: &quot;Titillium Web SemiBold&quot;, &quot;Titillium Web SemiBold&quot;;\">Actify</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 352px; top: 261px; width: 317px; height: 41px; z-index: 47;",
	cssClasses:	"hotspot-title",
	htmlId:		"tobj1866",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,0,0,[352,261,317,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":352,"y":261,"width":317,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og1990.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og1990",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape1991.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 48; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1991",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Overlay",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1990.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape738.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
image2020.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2020Img\" src=\"images/Voorbeelden_hartwacht.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 578px; height: 133px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 395px; top: 123px; width: 578px; height: 133px; z-index: 49; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2020",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Voorbeelden_hartwacht",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og1990.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[395,123,578,133]],"shadoweffect":{"opacity":"0.25","depth":0,"color":"#000000","blurradius":15,"shadowtype":2,"bHasShadow":true,"dir":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":395,"y":123,"width":578,"height":133}}
};
shape1994.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 566 529\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(283 264.5)\" style=\"\">\n	<path d=\"M 11.37 0 L 554.63 0 A 11.37 11.37 0 0 1 566 11.37 L 566 517.63 A 11.37 11.37 0 0 1 554.63 529 L 11.37 529 A 11.37 11.37 0 0 1 0 517.63 L 0 11.37 A 11.37 11.37 0 0 1 11.37 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-283, -264.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(283 264.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 706px; top: 208px; width: 566px; height: 529px; z-index: 50; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj1994",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[706,208.00000000000006,566,529]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":706,"y":208,"width":566,"height":529},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape1994.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
video2024.rcdData.att_Desktop = 
{
	innerHtml:	"<div id=\"vid\" style=\"left: 0px; top: 0px; width: 489px; height: 283px; background-color: rgb(0, 0, 0); position: absolute;\"></div>",
	cssText:	"position: absolute; left: 0px; top: 0px; width: 1px; height: 1px; z-index: 51; visibility: hidden; opacity: 0.01;",
	cssClasses:	"",
	htmlId:		"tobj2024",
	bInsAnc:	0,
	stdHtml:	'<video id="swftobj2024" name="swftobj2024" width="1" height="1" controls="controls" preload="none" playsinline><source type="video/mp4" src="media/Video%20Hartwacht.mp4" /></video>',
	iosHtml:	'undefined',
	resource:	'media/Video Hartwacht.mp4',
	cwObj:		{
		"name":	"Video Hartwacht"
	},
	objData:	{"a":[0,262400,0,[746,419,489,283,-24]],"bLiveWin":1,"desktopRect":{"x":746,"y":419,"width":489,"height":283},"hasEvents":0,"supportsEvents":true,"initHidden":true,"useNoSkin":false,"cssSkin":"trivantis-player.css","includeShim":"","flashStreamer":"","bRollOver":false,"skinHeight":24}
};
text1995.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 504px; min-height: 163px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 504px; min-height: 163px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;; font-size: 12pt;\">Zilveren Kruis ondersteunt de ontwikkeling van de app HartWacht. Patiënten kunnen hiermee thuis, zelf een hartslagmeting doen en de resultaten online delen en bespreken met een cardioloog. Dat scheelt veel heen- en weer gereis naar het ziekenhuis!</span><span style=\"font-family: &quot;PT Sans&quot;, sans-serif; font-size: 12pt; color: rgb(0, 40, 87);\"> </span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 746px; top: 295px; width: 504px; height: 163px; z-index: 52;",
	cssClasses:	"hotspot-body",
	htmlId:		"tobj1995",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[746,295,504,163]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":746,"y":295,"width":504,"height":163},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text1996.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 317px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 317px; min-height: 41px;\"><p style=\"text-align:left\"><span style=\"font-size: 18pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, &quot;Titillium Web SemiBold&quot;;\">Hartwacht</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 746px; top: 247px; width: 317px; height: 41px; z-index: 53;",
	cssClasses:	"hotspot-title",
	htmlId:		"tobj1996",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,0,0,[746,247,317,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":746,"y":247,"width":317,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og2000.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2000",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape2001.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 54; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2001",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Overlay",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2000.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape738.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
image2026.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2026Img\" src=\"images/Voorbeelden_zilverkorting.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 242px; height: 133px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 972px; top: 123px; width: 242px; height: 133px; z-index: 55; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2026",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Voorbeelden_zilverkorting",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2000.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[972,123,242,133]],"shadoweffect":{"opacity":"0.25","depth":0,"color":"#000000","blurradius":15,"shadowtype":2,"bHasShadow":true,"dir":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":972,"y":123,"width":242,"height":133}}
};
shape2004.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 384 270\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(192 135)\" style=\"\">\n	<path d=\"M 5.8 0 L 378.2 0 A 5.8 5.8 0 0 1 384 5.8 L 384 264.2 A 5.8 5.8 0 0 1 378.2 270 L 5.8 270 A 5.8 5.8 0 0 1 0 264.2 L 0 5.8 A 5.8 5.8 0 0 1 5.8 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-192, -135) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(192 135)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 701px; top: 222px; width: 384px; height: 270px; z-index: 56; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2004",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[701,222.00000000000006,384,270]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":701,"y":222,"width":384,"height":270},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2004.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text2005.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 317px; min-height: 163px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 317px; min-height: 163px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;;\"><span style=\"font-size: 12pt;\">Klanten krijgen bij ons ‘zilverkorting’ op producten en diensten die voor veel mensen het leven makkelijker maken. Hierdoor blijven zij mobieler of kunnen met beperkingen langer thuis blijven wonen. </span><span style=\"font-size: 12pt;\">Neem een kijkje in het aanbod</span><span style=\"font-size: 12pt;\">. </span></span><span style=\"font-family: &quot;PT Sans&quot;, sans-serif; font-size: 12pt; color: rgb(0, 40, 87);\"> </span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 741px; top: 312px; width: 317px; height: 163px; z-index: 57;",
	cssClasses:	"hotspot-body",
	htmlId:		"tobj2005",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[741,312,317,163]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":741,"y":312,"width":317,"height":163},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2006.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 317px; min-height: 121px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 317px; min-height: 121px;\"><p style=\"text-align:left\"><span style=\"font-size: 18pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Zilverkorting</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 741px; top: 261px; width: 317px; height: 121px; z-index: 58;",
	cssClasses:	"hotspot-title",
	htmlId:		"tobj2006",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,0,0,[741,261,317,121]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":741,"y":261,"width":317,"height":121},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og2010.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2010",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape2011.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 59; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2011",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Overlay",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2010.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape738.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
image2030.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2030Img\" src=\"images/Voorbeelden_chemo.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 243px; height: 133px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 153px; top: 387px; width: 243px; height: 133px; z-index: 60; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2030",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Voorbeelden_chemo",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2010.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[153,387,243,133]],"shadoweffect":{"opacity":"0.25","depth":0,"color":"#000000","blurradius":15,"shadowtype":2,"bHasShadow":true,"dir":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":153,"y":387,"width":243,"height":133}}
};
shape2014.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 409 282\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(204.5 141)\" style=\"\">\n	<path d=\"M 6.06 0 L 402.94 0 A 6.06 6.06 0 0 1 409 6.06 L 409 275.94 A 6.06 6.06 0 0 1 402.94 282 L 6.06 282 A 6.06 6.06 0 0 1 0 275.94 L 0 6.06 A 6.06 6.06 0 0 1 6.06 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-204.5, -141) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(204.5 141)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 360px; top: 433px; width: 409px; height: 282px; z-index: 61; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2014",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[360,433.00000000000006,409,282]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":360,"y":433,"width":409,"height":282},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2014.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text2015.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 317px; min-height: 175px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 317px; min-height: 175px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;; font-size: 12pt;\">Zilveren Kruis zorgt ervoor dat patiënten met kanker hun chemotherapie deels thuis kunnen ondergaan. Natuurlijk gebeurt dit alleen als de patiënt dit wil en dit medisch verantwoord is. Een gespecialiseerd verpleegkundige dient de medicatie thuis toe en zorgt er zo voor dat de behandeling minder belastend is. </span><span style=\"font-family: &quot;PT Sans&quot;, sans-serif; font-size: 12pt; color: rgb(0, 40, 87);\"> </span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 400px; top: 515px; width: 317px; height: 175px; z-index: 62;",
	cssClasses:	"hotspot-body",
	htmlId:		"tobj2015",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[400,515,317,175]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":400,"y":515,"width":317,"height":175},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2016.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 317px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 317px; min-height: 41px;\"><p style=\"text-align:left\"><span style=\"font-size: 18pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Chemotherapie thuis</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 400px; top: 469px; width: 317px; height: 41px; z-index: 63;",
	cssClasses:	"hotspot-title",
	htmlId:		"tobj2016",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,0,0,[400,469,317,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":400,"y":469,"width":317,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og2034.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2034",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape2035.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 64; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2035",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Overlay",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2034.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape738.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
image2044.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2044Img\" src=\"images/Voorbeelden_thuisconsult.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 531px; height: 133px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 153px; top: 255px; width: 531px; height: 133px; z-index: 65; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2044",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Voorbeelden_thuisconsult",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2034.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[153,255,531,133]],"shadoweffect":{"opacity":"0.25","depth":0,"color":"#000000","blurradius":15,"shadowtype":2,"bHasShadow":true,"dir":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":153,"y":255,"width":531,"height":133}}
};
shape2038.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 409 328\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(204.5 164)\" style=\"\">\n	<path d=\"M 7.05 0 L 401.95 0 A 7.05 7.05 0 0 1 409 7.05 L 409 320.95 A 7.05 7.05 0 0 1 401.95 328 L 7.05 328 A 7.05 7.05 0 0 1 0 320.95 L 0 7.05 A 7.05 7.05 0 0 1 7.05 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-204.5, -164) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(204.5 164)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 460px; top: 360px; width: 409px; height: 328px; z-index: 66; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2038",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[460,360.00000000000006,409,328]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":460,"y":360,"width":409,"height":328},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2038.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text2039.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 345px; min-height: 200px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 345px; min-height: 200px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;; font-size: 12pt;\">Zilveren Kruis ondersteunt een proef voor 25 patiënten met COPD (longziekte). Deze patiënten krijgen een tablet waarmee ze medische informatie kunnen doorgeven aan het ziekenhuis. Als die informatie aanleiding geeft voor een gesprek, neemt de longverpleegkundige via de webcam contact op met de patiënt. </span><span><span style=\"color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif; font-size: 12pt;\"> </span><span style=\"font-family: &quot;PT Sans&quot;, sans-serif; font-size: 12pt; color: rgb(0, 40, 87);\"> </span></span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 500px; top: 490px; width: 345px; height: 200px; z-index: 67;",
	cssClasses:	"hotspot-body",
	htmlId:		"tobj2039",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[500,490,345,200]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":500,"y":490,"width":345,"height":200},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2040.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 317px; min-height: 75px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 317px; min-height: 75px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size: 18pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Thuisconsult voor COPD patiënten</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 500px; top: 395px; width: 317px; height: 75px; z-index: 68;",
	cssClasses:	"hotspot-title",
	htmlId:		"tobj2040",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,0,0,[500,395,317,75]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":500,"y":395,"width":317,"height":75},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og2048.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2048",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape2049.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 69; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2049",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Overlay",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2048.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape738.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
image2060.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2060Img\" src=\"images/Voorbeelden_zorg%20veilig%20thuis.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 531px; height: 133px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 153px; top: 519px; width: 531px; height: 133px; z-index: 70; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2060",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Voorbeelden_zorg veilig thuis",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2048.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[153,519,531,133]],"shadoweffect":{"opacity":"0.25","depth":0,"color":"#000000","blurradius":15,"shadowtype":2,"bHasShadow":true,"dir":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":153,"y":519,"width":531,"height":133}}
};
shape2052.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 566 522\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(283 261)\" style=\"\">\n	<path d=\"M 11.22 0 L 554.78 0 A 11.22 11.22 0 0 1 566 11.22 L 566 510.78 A 11.22 11.22 0 0 1 554.78 522 L 11.22 522 A 11.22 11.22 0 0 1 0 510.78 L 0 11.22 A 11.22 11.22 0 0 1 11.22 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-283, -261) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(283 261)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 660px; top: 96px; width: 566px; height: 522px; z-index: 71; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2052",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[660,96.00000000000006,566,522]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":660,"y":96,"width":566,"height":522},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2052.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
video2053.rcdData.att_Desktop = 
{
	innerHtml:	"<div id=\"vid\" style=\"left: 0px; top: 0px; width: 489px; height: 275px; background-color: rgb(0, 0, 0); position: absolute;\"></div>",
	cssText:	"position: absolute; left: 0px; top: 0px; width: 1px; height: 1px; z-index: 72; visibility: hidden; opacity: 0.01;",
	cssClasses:	"",
	htmlId:		"tobj2053",
	bInsAnc:	0,
	stdHtml:	'<video id="swftobj2053" name="swftobj2053" width="1" height="1" controls="controls" preload="none" playsinline><source type="video/mp4" src="media/Video%20Zorg%20veilig%20thuis.mp4" /></video>',
	iosHtml:	'undefined',
	resource:	'media/Video Zorg veilig thuis.mp4',
	cwObj:		{
		"name":	"Video Zorg veilig thuis"
	},
	objData:	{"a":[0,262400,0,[699,310,489,275,-24]],"bLiveWin":1,"desktopRect":{"x":699,"y":310,"width":489,"height":275},"hasEvents":0,"supportsEvents":true,"initHidden":true,"useNoSkin":false,"cssSkin":"trivantis-player.css","includeShim":"","flashStreamer":"","bRollOver":false,"skinHeight":24}
};
text2054.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 504px; min-height: 163px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 504px; min-height: 163px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;; font-size: 12pt;\">Patiënten gaan minder vaak naar een zorginstelling. In plaats daarvan hebben zij online contact met hun zorgverlener, monitoren zij zelf hun lichaamsfuncties en ondergaan thuis een behandeling. Bekijk de video om te zien hoe we dit ondersteunen. &nbsp;</span><span style=\"font-family: &quot;PT Sans&quot;, sans-serif; font-size: 12pt; color: rgb(0, 40, 87);\"> </span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 700px; top: 187px; width: 504px; height: 163px; z-index: 73;",
	cssClasses:	"hotspot-body",
	htmlId:		"tobj2054",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[700,187,504,163]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":700,"y":187,"width":504,"height":163},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2055.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 317px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 317px; min-height: 41px;\"><p style=\"text-align:left\"><span style=\"font-size: 18pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Zorg veilig thuis</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 700px; top: 135px; width: 317px; height: 41px; z-index: 74;",
	cssClasses:	"hotspot-title",
	htmlId:		"tobj2055",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,0,0,[700,135,317,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":700,"y":135,"width":317,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og2064.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2064",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape2065.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 75; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2065",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Overlay",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2064.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape738.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
image2075.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2075Img\" src=\"images/Voorbeelden_gezond%20ondernemen.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 578px; height: 133px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 395px; top: 387px; width: 578px; height: 133px; z-index: 76; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2075",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Voorbeelden_gezond ondernemen",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2064.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[395,387,578,133]],"shadoweffect":{"opacity":"0.25","depth":0,"color":"#000000","blurradius":15,"shadowtype":2,"bHasShadow":true,"dir":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":395,"y":387,"width":578,"height":133}}
};
shape2068.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 566 577\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(283 288.5)\" style=\"\">\n	<path d=\"M 12.17 0 L 553.83 0 A 12.17 12.17 0 0 1 566 12.17 L 566 564.83 A 12.17 12.17 0 0 1 553.83 577 L 12.17 577 A 12.17 12.17 0 0 1 0 564.83 L 0 12.17 A 12.17 12.17 0 0 1 12.17 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-283, -288.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(283 288.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 30px; top: 123px; width: 566px; height: 577px; z-index: 77; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2068",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[29.999999999999943,123.00000000000006,566,577]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":30,"y":123,"width":566,"height":577},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2068.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
video2069.rcdData.att_Desktop = 
{
	innerHtml:	"<div id=\"vid\" style=\"left: 0px; top: 0px; width: 488px; height: 273px; background-color: rgb(0, 0, 0); position: absolute;\"></div>",
	cssText:	"position: absolute; left: 0px; top: 0px; width: 1px; height: 1px; z-index: 78; visibility: hidden; opacity: 0.01;",
	cssClasses:	"",
	htmlId:		"tobj2069",
	bInsAnc:	0,
	stdHtml:	'<video id="swftobj2069" name="swftobj2069" width="1" height="1" controls="controls" preload="none" playsinline><source type="video/mp4" src="media/Video%20Gezond%20Ondernemen.mp4" /></video>',
	iosHtml:	'undefined',
	resource:	'media/Video Gezond Ondernemen.mp4',
	cwObj:		{
		"name":	"Video Gezond Ondernemen"
	},
	objData:	{"a":[0,262400,0,[70,389,488,273,-24]],"bLiveWin":1,"desktopRect":{"x":70,"y":389,"width":488,"height":273},"hasEvents":0,"supportsEvents":true,"initHidden":true,"useNoSkin":false,"cssSkin":"trivantis-player.css","includeShim":"","flashStreamer":"","bRollOver":false,"skinHeight":24}
};
text2070.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 494px; min-height: 163px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 494px; min-height: 163px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span><span style=\"color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif; font-size: 12pt;\">Met Gezond Ondernemen ondersteunt Zilveren Kruis bedrijven bij het gezond houden van medewerkers, het snel en effectief re-integreren bij verzuim en het verzekeren van financiële risico’s. We bieden bedrijven bijvoorbeeld workshops en trainingen aan. Door onze aanpak beloven wij dat verzuim lager wordt, de kosten dalen en de medewerkerstevredenheid stijgt.&nbsp;</span><span style=\"color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif; font-size: 12pt;\"> </span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 70px; top: 213px; width: 494px; height: 163px; z-index: 79;",
	cssClasses:	"hotspot-body",
	htmlId:		"tobj2070",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[70,213,494,163]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":70,"y":213,"width":494,"height":163},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2071.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 317px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 317px; min-height: 41px;\"><p style=\"text-align:left\"><span style=\"font-size: 18pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Gezond ondernemen</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 70px; top: 162px; width: 317px; height: 41px; z-index: 80;",
	cssClasses:	"hotspot-title",
	htmlId:		"tobj2071",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,0,0,[70,162,317,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":70,"y":162,"width":317,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og2080.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2080",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape2081.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 81; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2081",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Overlay",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2080.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape738.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
image2090.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2090Img\" src=\"images/Voorbeelden_hulp%20bij%20betaling.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 531px; height: 133px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 683px; top: 519px; width: 531px; height: 133px; z-index: 82; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2090",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Voorbeelden_hulp bij betaling",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2080.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[683,519,531,133]],"shadoweffect":{"opacity":"0.25","depth":0,"color":"#000000","blurradius":15,"shadowtype":2,"bHasShadow":true,"dir":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":683,"y":519,"width":531,"height":133}}
};
shape2084.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 459 339\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(229.5 169.5)\" style=\"\">\n	<path d=\"M 7.29 0 L 451.71 0 A 7.29 7.29 0 0 1 459 7.29 L 459 331.71 A 7.29 7.29 0 0 1 451.71 339 L 7.29 339 A 7.29 7.29 0 0 1 0 331.71 L 0 7.29 A 7.29 7.29 0 0 1 7.29 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-229.5, -169.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(229.5 169.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 314px; top: 279px; width: 459px; height: 339px; z-index: 83; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2084",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[314,279.00000000000006,459,339]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":314,"y":279,"width":459,"height":339},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2084.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text2085.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 395px; min-height: 212px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 395px; min-height: 212px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;; font-size: 12pt;\">Zilveren Kruis werkt met diverse steden samen om mensen vroegtijdig hulp te bieden bij schulden. Bij een betalingsachterstand van 2 maanden bij Zilveren Kruis benadert het buurtteam van de gemeente deze mensen voor een huisbezoek. Dit buurtteam helpt mensen bijvoorbeeld met het aanvragen van de juiste toeslagen of het regelen van online zaken. Zo voorkomen we dat mensen in ernstige financiële problemen komen</span><span><span><span style=\"color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif; font-size: 12pt;\"> </span><span style=\"font-family: &quot;PT Sans&quot;, sans-serif; font-size: 12pt; color: rgb(0, 40, 87);\"> </span></span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 354px; top: 398px; width: 395px; height: 212px; z-index: 84;",
	cssClasses:	"hotspot-body",
	htmlId:		"tobj2085",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[354,398,395,212]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":354,"y":398,"width":395,"height":212},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2086.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 364px; min-height: 76px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 364px; min-height: 76px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"font-size: 18pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Vroegtijdige hulp bij betalingsachterstanden</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 354px; top: 311px; width: 364px; height: 76px; z-index: 85;",
	cssClasses:	"hotspot-title",
	htmlId:		"tobj2086",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,0,0,[354,311,364,76]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":354,"y":311,"width":364,"height":76},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og2174.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2174",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape2175.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 86; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2175",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Overlay",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2174.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape738.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
image2185.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2185Img\" src=\"images/Voorbeelden_alles%20ok.png\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 242px; height: 133px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 972px; top: 387px; width: 242px; height: 133px; z-index: 87; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2185",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Voorbeelden_alles ok",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2174.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[972,387,242,133]],"shadoweffect":{"opacity":"0.25","depth":0,"color":"#000000","blurradius":15,"shadowtype":2,"bHasShadow":true,"dir":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":972,"y":387,"width":242,"height":133}}
};
shape2178.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 566 264\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(283 132)\" style=\"\">\n	<path d=\"M 5.68 0 L 560.32 0 A 5.68 5.68 0 0 1 566 5.68 L 566 258.32 A 5.68 5.68 0 0 1 560.32 264 L 5.68 264 A 5.68 5.68 0 0 1 0 258.32 L 0 5.68 A 5.68 5.68 0 0 1 5.68 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-283, -132) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(283 132)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 432px; top: 219px; width: 566px; height: 264px; z-index: 88; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2178",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[431.99999999999994,219.00000000000006,566,264]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":432,"y":219,"width":566,"height":264},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2178.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
text2180.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 494px; min-height: 163px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 494px; min-height: 163px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;; font-size: 12pt;\">Zilveren Kruis is samen met Toon een proef gestart voor een nieuwe dienst voor alleenwonende ouderen: ‘Alles Oké’. De dienst bestaat uit een app die op basis van energiedata een seintje geeft aan een aangesloten familielid of vriend wanneer iets niet in orde lijkt bij een alleenwonende oudere.&nbsp;Die kan vervolgens direct contact opnemen met de vraag: Gaat alles oké?</span><span><span style=\"color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif; font-size: 12pt;\"> </span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 472px; top: 302px; width: 494px; height: 163px; z-index: 89;",
	cssClasses:	"hotspot-body",
	htmlId:		"tobj2180",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[472,302,494,163]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":472,"y":302,"width":494,"height":163},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2181.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 317px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 317px; min-height: 41px;\"><p style=\"text-align:left\"><strong><span style=\"font-size: 18pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web&quot;, &quot;Titillium Web&quot;;\">Alles oké</span></strong></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 472px; top: 258px; width: 317px; height: 41px; z-index: 90;",
	cssClasses:	"hotspot-title",
	htmlId:		"tobj2181",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,0,0,[472,258,317,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":472,"y":258,"width":317,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
og2189.rcdData.att_Desktop = 
{
	innerHtml:	"",
	cssText:	"",
	cssClasses:	"",
	htmlId:		"og2189",
	bInsAnc:	undefined,
	objData:	{"a":[0,64,0,[]],"bReadLast":false}
};
shape2190.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 1366 690\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(683 345)\" style=\"\">\n	<path d=\"M 0 0 L 1366 0 L 1366 690 L 0 690 L 0 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(214, 239, 240); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85); pointer-events: auto;\" transform=\"translate(0 0) translate(-683, -345) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(683 345)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:0.85;filter:alpha(opacity=85);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: -1.13687e-13px; top: 78px; width: 1366px; height: 690px; z-index: 91; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2190",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Overlay",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2189.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,0,0,[-1.1368683772161603e-13,78.00000000000017,1366,690]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":0,"y":78,"width":1366,"height":690},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape738.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; opacity: 0.85;\">"}
};
image2200.rcdData.att_Desktop = 
{
	innerHtml:	"<img id=\"tobj2200Img\" src=\"images/Voorbeelden_zorgbemiddeling.jpg\" style=\"position: absolute; border-style: none; left: 0px; top: 0px; width: 531px; height: 133px;\">",
	cssText:	"visibility: hidden; position: absolute; left: 683px; top: 255px; width: 531px; height: 133px; z-index: 92; cursor: pointer;",
	cssClasses:	"",
	htmlId:		"tobj2200",
	bInsAnc:	1,
	cwObj:		{
		"name":	"Voorbeelden_zorgbemiddeling",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkHide',actItem:function(){ og2189.hide(); 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,256,0,[683,255,531,133]],"shadoweffect":{"opacity":"0.25","depth":0,"color":"#000000","blurradius":15,"shadowtype":2,"bHasShadow":true,"dir":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":683,"y":255,"width":531,"height":133}}
};
shape2193.rcdData.att_Desktop = 
{
	innerHtml:	"<svg viewBox=\"0 0 566 527\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\"><g transform=\"translate(283 263.5)\" style=\"\">\n	<path d=\"M 11.33 0 L 554.67 0 A 11.33 11.33 0 0 1 566 11.33 L 566 515.67 A 11.33 11.33 0 0 1 554.67 527 L 11.33 527 A 11.33 11.33 0 0 1 0 515.67 L 0 11.33 A 11.33 11.33 0 0 1 11.33 0 Z\" style=\"stroke: rgb(238, 238, 238); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-283, -263.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(283 263.5)\">\n		<text font-family=\"\'Verdana\',sans serif\" font-size=\"18.6666662\" font-weight=\"bold\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(102,102,102); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.88\" fill=\"#666666\"></tspan>\n		</text>\n	</g>\n</svg>",
	cssText:	"visibility: hidden; position: absolute; left: 174px; top: 157px; width: 566px; height: 527px; z-index: 93; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	htmlId:		"tobj2193",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Rounded Rectangle"
	},
	objData:	{"a":[0,0,0,[173.99999999999994,157.00000000000006,566,527]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":174,"y":157,"width":566,"height":527},"btnState":"disabled","fallbackImg":"<img src=\"images/desktop_shape2193.png\" alt=\"\" title=\"\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
video2194.rcdData.att_Desktop = 
{
	innerHtml:	"<div id=\"vid\" style=\"left: 0px; top: 0px; width: 487px; height: 273px; background-color: rgb(0, 0, 0); position: absolute;\"></div>",
	cssText:	"position: absolute; left: 0px; top: 0px; width: 1px; height: 1px; z-index: 94; visibility: hidden; opacity: 0.01;",
	cssClasses:	"",
	htmlId:		"tobj2194",
	bInsAnc:	0,
	stdHtml:	'<video id="swftobj2194" name="swftobj2194" width="1" height="1" controls="controls" preload="none" playsinline><source type="video/mp4" src="media/Video%20Zorgcoaches.mp4" /></video>',
	iosHtml:	'undefined',
	resource:	'media/Video Zorgcoaches.mp4',
	cwObj:		{
		"name":	"Video Zorgcoaches"
	},
	objData:	{"a":[0,262400,0,[214,374,487,273,-24]],"bLiveWin":1,"desktopRect":{"x":214,"y":374,"width":487,"height":273},"hasEvents":0,"supportsEvents":true,"initHidden":true,"useNoSkin":false,"cssSkin":"trivantis-player.css","includeShim":"","flashStreamer":"","bRollOver":false,"skinHeight":24}
};
text2195.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 494px; min-height: 163px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 494px; min-height: 163px;\"><p style=\"text-align: left; line-height: 1.5; margin-top: 0px; margin-bottom: 0px;\"><span style=\"color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, &quot;PT Sans&quot;; font-size: 12pt;\">De Zorgcoaches van Zilveren Kruis geven mensen persoonlijk advies bij het aanvragen en regelen van zorg. Welk ziekenhuis is bijvoorbeeld het beste? Waar kan iemand het snelst terecht? En hoe vraag je een second opinion aan?</span><span><span style=\"color: rgb(0, 40, 87); font-family: &quot;PT Sans&quot;, sans-serif; font-size: 12pt;\"> </span></span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 214px; top: 247px; width: 494px; height: 163px; z-index: 95;",
	cssClasses:	"hotspot-body",
	htmlId:		"tobj2195",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>tekst"
	},
	objData:	{"a":[0,0,0,[214,247,494,163]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":214,"y":247,"width":494,"height":163},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text2196.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 317px; min-height: 41px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 317px; min-height: 41px;\"><p style=\"text-align:left\"><span style=\"font-size: 18pt; color: rgb(0, 40, 87); font-family: &quot;Titillium Web SemiBold&quot;, sans-serif;\">Zorgbemiddeling</span></p></div></div>",
	cssText:	"visibility: hidden; position: absolute; left: 214px; top: 196px; width: 317px; height: 41px; z-index: 96;",
	cssClasses:	"hotspot-title",
	htmlId:		"tobj2196",
	bInsAnc:	0,
	cwObj:		{
		"name":	">>>Titel1"
	},
	objData:	{"a":[0,0,0,[214,196,317,41]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":214,"y":196,"width":317,"height":41},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
text160.rcdData.att_Desktop = 
{
	innerHtml:	"<div name=\"dCon\" style=\"position: absolute; left: 0px; top: 0px; width: 396px; min-height: 80px;\"><div name=\"dCon2\" class=\"ttxt\" style=\"left: 0px; top: 0px; width: 396px; min-height: 80px;\"><p align=\"center\" style=\"margin-left:0px;text-indent:0px;margin-top:0px;margin-bottom:0px;\"><span style=\"font-size: 12pt; font-family: &quot;Titillium Web&quot;, sans-serif; color: rgb(0, 104, 189);\">Voorbeelden uit de praktijk</span></p></div></div>",
	cssText:	"visibility: inherit; position: absolute; left: 484px; top: 43px; width: 396px; height: 80px; z-index: 29;",
	cssClasses:	"header-module-subtitle",
	htmlId:		"tobj160",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Module subtitle"
	},
	objData:	{"a":[0,32,0,[484,43,396,80]],"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":484,"y":43,"width":396,"height":80},"dwTextFlags":0,"marginSize":0,"textPublishLang":"Inherit"}
};
rcdObj.rcdData.att_Desktop = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.15","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	8
};
rcdObj.pgWidth_Desktop = pgWidth_desktop;
rcdObj.preload_Desktop = ["images/Logo-ZK.jpg","images/Button_sluit_groot.png","images/H1_disabled.png","images/H2_disabled.png","images/H3_highlight.png","images/Button_volgende.png","images/Button_volgende_hover.png","images/Button_vorige.png","images/Button_vorige_hover.png","images/Voorbeelden_Actify.png","images/Voorbeelden_hartwacht.jpg","images/Voorbeelden_zilverkorting.png","images/Voorbeelden_thuisconsult.jpg","images/Voorbeelden_zorgbemiddeling.jpg","images/Voorbeelden_chemo.png","images/Voorbeelden_gezond%20ondernemen.jpg","images/Voorbeelden_alles%20ok.png","images/Voorbeelden_zorg%20veilig%20thuis.jpg","images/Voorbeelden_hulp%20bij%20betaling.jpg","images/Hotspot%20area%201_invisible.png","images/Hotspot%20area%201_border.png","images/Hotspot%20area%202_invisible.png","images/Hotspot%20area%202_border.png","images/Hotspot%20area%203_invisible.png","images/Hotspot%20area%203_border.png"];
rcdObj.pgStyle_Desktop = 'position: absolute; left: 0px; top: 0px; width: 1366px; height: 768px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_Desktop = ["#FFFFFF","",0,0,1];
