function EncipherOnClick()
{
	var keyword = removeSymbols(document.getElementById('key').value);
	var pt = removeSymbols(document.getElementById('pt').value);	
	
	var matrix = CreateMatrix(keyword, pt);
	matrix = Sort(matrix);
	
	CreateTable(matrix);
	
	//print without keyword
	//how do we want to have information print?
}

function CreateMatrix(keyword, message)
{
	var matrix = [];
	for( var i = 0; i < keyword.length; i++)
	{
		matrix[i] = [];
		matrix[i].push(keyword[i]);
	}
	
	var messageIndex = 0;
	
	
	while(messageIndex < message.length)
	{
		for( var x = 1; x < keyword.length; x++)
		{
			if(messageIndex < message.length)
			{
				matrix[x].push(message[messageIndex]);
			}
			else
			{
				matrix[x].push("X");			
			}
			messageIndex++;
		}
	}
	
	return matrix;
}


function removeSymbols(message)
{
	//parthenses
	message.replace(" ", "");
	message.replace(",", "");
	message.replace("'", "");
	message.replace(".", "");
	message.replace("-", "");
	message.replace("/", "");
	message.replace("\n", "");
	message.replace("\t", "");
	message.replace(":", "");
	return message;
	
}


function CreateMatrix(keyword, message)
{
	var matrix = [];
	for( var i = 0; i < keyword.length; i++)
	{
		matrix[i] = [];
		matrix[i].push(keyword[i]);
	}
	
	var messageIndex = 0;
	
	
	while(messageIndex < message.length)
	{
		for( var x = 0; x < keyword.length; x++)
		{
			if(messageIndex < message.length)
			{
				matrix[x].push(message[messageIndex]);
			}
			else
			{
				matrix[x].push("X");			
			}
			messageIndex++;
		}
	}
	
	return matrix;
}


function removeSymbols(message)
{
	//parthenses
	message.replace(" ", "");
	message.replace(",", "");
	message.replace("'", "");
	message.replace(".", "");
	message.replace("-", "");
	message.replace("/", "");
	message.replace("\n", "");
	message.replace("\t", "");
	message.replace(":", "");
	return message;
	
}

function Sort(matrix)
{
	var sorted = false;
	var lowerLimit = 0;
	var swapLocation = 0;
	
	
	while(lowerLimit <  matrix.length)
	{
		var lowest = matrix[lowerLimit][0];

		for(var i = lowerLimit + 1; i < matrix.length; i++)
		{
			if(lowest > matrix[i][0])
			{
				lowest = matrix[i][0];
				swapLocation = i;
			}
		}
		
		var temp = matrix[lowerLimit];
		matrix[lowerLimit] = matrix[swapLocation];
		matrix[swapLocation] = temp;
		
		lowerLimit++;
		swapLocation = lowerLimit;
	}
	
	return matrix;
}

 function CreateTable(matrix)
{
	document.writeln("<table class=\"draggable\">");
	
	document.writeln("<tr>");
	for(var x = 0; x < matrix.length; x++)
	{
		document.writeln("<th>" + matrix[x][0]);
	}

	
	for(var i = 1; i < matrix[i].length; i++)
	{
		document.writeln("<tr>");
		for(var x = 0; x < matrix.length; x++)
		{
			document.writeln("<td>" + matrix[x][i]);
		}
	}
	
}




function CreateMatrixOffLength(keyword, message)
{
	
	var matrix = [];
	keyword = keyword.split(" ");
	for( var i = 0; i < keyword.length; i++)
	{
		matrix.push = [];
		matrix[x].push(keyword[x]);
	}
	
	var messageIndex = 0;
	
	
	while(messageIndex < message.length)
	{
		for( var x = 0; x < keyword.length; x++)
		{
			if(messageIndex < message.length)
			{
				matrix[x].push(message[messageIndex]);
			}
			else
			{
				matrix[x].push("X");			
			}
		}
	}
	
	return matrix;
}




function respace(message)
{
	var lowerLimit = 0;
	var upperLimit = 4;
	while(upperLimit < message.length)
	{
		message = message.slice(lowerLimit, upperLimit) + " " + message.slice(upperLimit, message.length);
	}
	
	return message;
}

function DecipherWithKeyWord()
{
	var keyword = removeSymbols(document.getElementById('key').value);
	var ct = removeSymbols(document.getElementById('ct').value);	
	
	var matrix = CreateMatrix(keyword, matrix);
	
	//put in order what if there are two different columns? Maybe a stat anylasis
	
	CreateTable(matrix);
}

function DecipherWithKeyWordLength()
{
	var keywordLength = document.getElementById('Key Length').value;
	var ct = removeSymbols(document.getElementById('ct').value);	
	
	var keyword = "";
	for(var i = 0; i < keywordLength; i++)
	{
		keyword += keyword + " " + i;
	}
	
	var matrix = CreateMatrixOffLength(keyword, matrix);
	
	matrix = Sort(matrix);
	CreateTable(matrix);
}

 