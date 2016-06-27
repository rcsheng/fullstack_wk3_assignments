function findACount(param)
{
	var paramArr = param.toLowerCase().split("a");
	return paramArr,paramArr.length-1;
}

function areaCodeFinder(param)
{
	//return param.match(\d\d\d);
	var re = /\d{3}/;
	var found = param.match(re);
	return Number(found[0]);
}

function adjustUrlParameter(url,param)
{
	//console.log(param.search("="));
	var paramCat = param.substring(0,param.search("="));
	var paramVal = param.substring(param.search("=")+1,param.length);
	//console.log(paramCat+" "+paramVal);
	var re = new RegExp("\/" +paramCat + "\\/\\=\d+");

	if (url.search(paramCat) === -1)
	{
		if (url.search("/?")=== -1)
			return url + "?" + param;
		else 
			return url + "&" + param;
	}
	else
	{
		var re2 = RegExp(paramCat+"=\\d{3}");
		return url.replace(re2,param);
	}
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function stringPlusPlus(param)
{
	var re = /\d+/;
	var valString = param.match(re);


	//console.log("valString: "+valString,"len: ",valString.length);
	if (valString === null)
		return param+'1';
	else
	{
		valString = valString.toString();

		var tmp = pad(Number(valString)+1,valString.length);
		console.log("tmp: ",tmp);
		return param.replace(re,tmp);
	}
		
}
