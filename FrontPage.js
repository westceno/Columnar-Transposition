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

