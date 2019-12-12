function EncipherOnClick()
{
	var keyword = removeSymbols(document.getElementById('key').value);
	var pt = removeSymbols(document.getElementById('pt').value).toUpperCase();	
	
	var matrix = CreateMatrix(keyword, pt);
	matrix = Sort(matrix);
	
	CreateTable(matrix);
	
	//print without keyword
	var message = GetMessageText(matrix);
	document.getElementById("ct").value = respace(message);
}

function GetMessageText(matrix)
{
	var message = "";
	
	for( var x = 0; x < matrix.length; x++)
	{
		for(var i = 1; i < matrix[0].length; i++)
		{
		
			message += matrix[x][i];
		}	
	}
	
	return message;
}

function GetMessageTextEncipher(matrix)
{
	var message = "";
	
	for(var i = 1; i < matrix[0].length; i++)
	{
		for( var x = 0; x < matrix.length; x++)
		{
		
			message += matrix[x][i];
		}	
	}
	
	return message;
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

function CreateMatrixDecipher(keyword, message)
{
	var matrix = [];
	for( var i = 0; i < keyword.length; i++)
	{
		matrix[i] = [];
		matrix[i].push(keyword[i]);
	}
	
	var messageIndex = 0;
	
	var index = 0;
	
	while(messageIndex < message.length)
	{
		for( var x = 0; x < message.length/keyword.length; x++)
		{
			if(messageIndex < message.length)
			{
				matrix[index].push(message[messageIndex]);
			}
			else
			{
				matrix[index].push("*");			
			}
			messageIndex++;
		}
		index++;
	}
	
	return matrix;
}

function removeSymbols(message)
{
	//parthenses
	message = message.replace(/ /g, "");
	message = message.replace(/,/g, "");
	message = message.replace(/'/g, "");
	message = message.replace(/\./g, "");
	message = message.replace(/-/g, "");
	message = message.replace(/\//g, "");
	message = message.replace(/\n/g, "");
	message = message.replace(/\t/g, "");
	message = message.replace(/:/g, "");
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


function ReorderKeyWord(keyword, matrix)
{
	var sorted = false;
	var lowerLimit = 0;
	var swapLocation = 0;
	var index = 0;
	
	while(lowerLimit <  matrix.length)
	{
		var keyLetter = keyword.split("")[lowerLimit];

		for(var i = lowerLimit + 1; i < matrix.length; i++)
		{
			if(keyLetter == matrix[i][0])
			{
				swapLocation = i;
				break;
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
	 var myTable= "<table id= \\\"table\\\" class= \\\"draggable\\\"  cellpadding=\\\"2\\\" border=\\\"1\\\" style=\\\"background:#f3f3f3\\\">";
	
	myTable = myTable + "<tr>";
	for(var x = 0; x < matrix.length; x++)
	{
		myTable = myTable + "<th class=\"cell\">" + matrix[x][0];
	}

	
	for(var i = 1; i < matrix[0].length; i++)
	{
		myTable = myTable + "<tr>";
		for(var x = 0; x < matrix.length; x++)
		{
			myTable = myTable + "<td class=\"cell\">" + matrix[x][i];
		}
	}
	
	document.getElementById('tablePrint').innerHTML = myTable;
	dragtable.init();

}


function CreateMatrixOffLength(keyword, message)
{
	
	keyword = keyword.split(" ");
	var matrix = [];
	for( var i = 0; i < keyword.length; i++)
	{
		matrix[i] = [];
		matrix[i].push(keyword[i]);
	}
	
	var messageIndex = 0;
	
	
		var index = 0;
	
	while(messageIndex < message.length)
	{
		for( var x = 0; x < message.length/keyword.length; x++)
		{
			if(messageIndex < message.length)
			{
				matrix[index].push(message[messageIndex]);
			}
			else
			{
				matrix[index].push("*");			
			}
			messageIndex++;
		}
		index++;
	}
	
	return matrix;
}




function respace(message)
{
	var lowerLimit = 0;
	var upperLimit = 5;
	while(upperLimit < message.length)
	{
		message = message.slice(0, upperLimit) + " " + message.slice(upperLimit, message.length);
		lowerLimit += 6;
		upperLimit += 6;
	}
	
	return message;
}

function DecipherWithKeyWord()
{
	var keyword = removeSymbols(document.getElementById('key').value).toLowerCase();
	var reorder = keyword.split('').sort().join('');
	var ct = removeSymbols(document.getElementById('ct').value).toLowerCase();	
	
	var matrix = CreateMatrixDecipher(reorder, ct);
	
	//put in order what if there are two different columns? Maybe a stat anylasis
	
	matrix = ReorderKeyWord(keyword, matrix);

	CreateTable(matrix);
	
	var message = GetMessageTextEncipher(matrix);
	document.getElementById("pt").value = respace(message);
}

function DecipherWithKeyWordLength()
{
	var keywordLength = document.getElementById('Key Length').value;
	var test = document.getElementById('ct').value;
	var ct = removeSymbols(document.getElementById('ct').value).toLowerCase();	
	
	var keyword = "0";
	for(var i = 1; i < keywordLength; i++)
	{
		keyword +=  " " + i;
	}
	
	var matrix = CreateMatrixOffLength(keyword, ct);
	
	CreateTable(matrix);
	
	var vowels = ["a", "e", "i", "o", "u", "y"];
	var count = 0;
	
	document.getElementById("ErrorMessage").innerHTML = " ";
	
	for(var i = 1; i < matrix[0].length; i++)
	{
		for(var x = 0; x < matrix.length; x++)
		{
			if(vowels.includes(matrix[x][i]))
			{
				count++
			}
		}
		
		

		if(count/(matrix.length * 1.0) < 0.25 )
		{
			document.getElementById("ErrorMessage").innerHTML = "Row " + i + " vowel amount is less than a quater. The keyword length might be off.";
		}
		else if(count/(matrix.length * 1.0) > 0.6)
		{
			document.getElementById("ErrorMessage").innerHTML = "Row " + i + " vowel amount is greater than a 60% of the row. The keyword length might be off.";
		}
	}
	
}

function getTableData()
{
	var table = document.getElementById("draggable");
	var info = document.getElementById("pt");
	info.value = ""
	for (i = 1; i < table.rows.length; i++) {
        // GET THE CELLS COLLECTION OF THE CURRENT ROW.
        var objCells = table.rows.item(i).cells;

        // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
        for (var j = 0; j < objCells.length; j++) {
            info.value = info.value + ' ' + objCells.item(j).innerHTML;
        }
    }
    
}


 