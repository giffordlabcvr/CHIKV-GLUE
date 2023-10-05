
//Do serotype recognition for all ncbi curated sequences

var ncbiCurated;
var whereClause = "source.name = 'ncbi-curated-short' and genotype = null";
ncbiCurated = glue.tableToObjects(glue.command(["list", "sequence", "sequenceID", "-w", whereClause]));
//glue.log("INFO", "RESULT WAS ", ncbiCurated);

_.each(ncbiCurated, function(ncbiCurated) {

	var sequenceID = ncbiCurated.sequenceID;
	var sourceName ='ncbi-curated-short';

	var whereClause = "sequenceID = '" + sequenceID + "'";
	glue.log("INFO", "ID RESULT WAS ", sequenceID);
	//glue.log("INFO", "WHERE CLAUSE RESULT WAS ", serotypeWhereClause);
	//glue.log("INFO", "sourceName RESULT WAS ", sourceName);
	//glue.log("INFO", "Serotype RESULT WAS ", serotype);

	var genotypeResults1;
	glue.inMode("/module/chikvMaxLikelihoodGenotyper", function() {
		genotypeResults1 = glue.command(["genotype", "sequence", "-w", whereClause]);
		//glue.log("INFO", "Genotype 1 RESULT WAS ", genotypeResults1);			
	});

	var genotypeRows = genotypeResults1.genotypeCommandResult.row;
	var genotypeRow = genotypeRows[0].value;
	var genotypeResult = genotypeRow[1]

	glue.log("INFO", "Genotype RESULT WAS ", genotypeResult);

	if (genotypeResult) {

		glue.inMode("sequence/"+sourceName+"/"+sequenceID, function() {
			glue.command(["set", "field", "genotype", genotypeResult]);
		});
	
	}

});	
