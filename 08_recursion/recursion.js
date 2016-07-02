function factorialIterative(num)
{
	var total = 1;
	for (var i = 0; i< num; i++)
	{
		total*=(num-i);
	}
	return total;
}

function factorial(n)
{
	if (n===0)
		return 1;
	else
		return n*factorial(n-1);
}

function fib(n)
{
	if (n<=1)
		return 1;
	else
		return fib(n-1) + fib(n-2);
}



var type = function(param)
{
	// var test = new Object;
	// instead of creating a new object, call the method directly from the Object.prototype using .call
	return Object.prototype.toString.call(param).match(/\s([a-zA-Z]+)/)[1];
	// return test.toString.call(param).match(/\s([a-zA-Z]+)/)[1];
}

var stringify = function(param)
{
	// refactor to only call the "type" functon 1x instead of multiple times. ex:
	
	var valueType = type(param); // now use this variable wherever you were calling type()
	if (!(type(param)=="Array" || type(param)=="Objects"))
	{
		if (type(param)=="String")
			return "\""+param+"\"";
		return String(param);	
	}
	else if (type(param)=="Array")
	{
		if (param.length == 0)
			return "";
		else if (param.length == 1)
			return String(param[0]);
		else
		{
			var tmp = param.pop();
			return Array.prototype.join(stringify(param),tmp," ");	
		}
		
	}
	
	// What about a case for Object literals?
}	
		
