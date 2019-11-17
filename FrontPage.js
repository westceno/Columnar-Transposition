function CreateMatrix(keyword, message)
{
	var matrix = [];
	for( var i = 0; i < keyword.length; i++)
	{
		matrix.push = [];
		matrix[x].push(keyword[x]);
	}
	
	int messageIndex = 0;
	
	
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

function Sort(matrix)
{
	var sorted = false;
	var lowerLimit = 0;
	var swapLocation = 0;
	
	
	while(lowerLimit <=  matrix.length)
	{
		var lowest = matrix[lowerLimit][0];

		for(int i = lowerLimit + 1; i <= matrix.length; i++)
		{
			if(lowest > matrix[lowerLimit][0])
			{
				lowest = matrix[lowerLimit][0];
				swapLocation = i;
			}
		}
		
		var temp = matrix[lowerLimit];
		matrix[lowerLimit] = matrix[swapLocation];
		matrix[swapLocation] = temp;
		
		lowerLimit++;
	}
	
	return matrix;
}

function removeSymbols(message)
{
	message.replace(" ", "")
	message.replace(",", "")
	message.replace("'", "")
	message.replace(".", "")
	message.replace("-", "")
	message.replace("/", "")
	message.replace("\n", "")
	message.replace("\t", "")
	message.replace(":", "")
	return message;
	
}

//add function for putting it back into 5 space thing

function DecipherWithKeyWord()
{
	var keyword = removeSymbols(document.getElementById('key').value);
	var ct = removeSymbols(document.getElementById('ct').value);	
	
	var matrix = CreateMatrix(keyword, matrix);
	
	matrix = sort(matrix);
	
	//Create table
}

//Add keyword based of keyword length


