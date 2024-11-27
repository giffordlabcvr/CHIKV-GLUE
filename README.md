# CHIKV-GLUE

<img src="md/chikv-glue-logo.png" align="right" alt="" width="240" />

Welcome to the GitHub repository for **CHIKV-GLUE**!

**CHIKV-GLUE** is a sequence-oriented resource for comparative genomic analysis of **chikungunya virus (CHIKV)**, developed using the [**GLUE**](https://github.com/giffordlabcvr/gluetools) software framework.

GLUE is an open, integrated software toolkit designed for storing and interpreting sequence data. It supports the creation of bespoke projects, incorporating essential data items for comparative genomic analysis, such as sequences, multiple sequence alignments, genome feature annotations, and other associated data.

Projects are loaded into the GLUE "engine," forming a relational database that represents the semantic relationships between data items. This foundation supports systematic comparative analyses and the development of sequence-based resources.

Please see the **[User Guide](https://github.com/giffordlabcvr/CHIKV-GLUE/wiki)** for more details.


* * * * * 

## Key Features

- **GLUE Framework Integration**: Built on the GLUE software framework, CHIKV-GLUE offers an extensible platform for efficient, standardized, and reproducible computational genomic analysis of CHIKV.

- **Phylogenetic Structure**: Sequence data in CHIKV-GLUE is organized in a phylogenetically-structured manner, allowing users to explore evolutionary relationships easily.

- **Rich Annotations**: Annotated reference sequences enable rigorous comparative genomic analysis related to conservation, adaptation, structural context, and genotype-to-phenotype associations.

- **Automated Genotyping**: CHIKV-GLUE can perform automated genotyping of CHIKV sequences (including subgenomic sequences) via GLUE's [maximum likelihood clade assignment (MLCA) algorithm](https://doi.org/10.1186/s12859-018-2459-9). 

* * * * * 

## Installation

If you have not done so already, install the GLUE software framework by following the [installation instructions](http://glue-tools.cvr.gla.ac.uk/#/installation) on the GLUE web site: 

Download the CHIKV-GLUE repository, navigate into the top-level directory, and start the GLUE command line interpreter.

At the GLUE command prompt, run the 'buildChikvProject.glue' file as follows:

```
GLUE Version 1.1.107
Copyright (C) 2015-2020 The University of Glasgow
This program comes with ABSOLUTELY NO WARRANTY. This is free software, and you
are welcome to redistribute it under certain conditions. For details see
GNU Affero General Public License v3: http://www.gnu.org/licenses/

Mode path: /
GLUE> run file buildChikvProject.glue
```

This will build the base project, which contains a minimal set of feature definitions, clade categories, reference sequences, and alignments.

* * * * * 

## Usage

GLUE contains an interactive command line environment focused on the development and use of GLUE projects by bioinformaticians. This provides a range of productivity-oriented features such as automatic command completion, command history and interactive paging through tabular data. 

For detailed instructions on how to use CHIKV-GLUE for your comparative genomic analysis, refer to the GLUE's [reference documentation](http://glue-tools.cvr.gla.ac.uk/).

* * * * * 

## Genotyping

To classify CHIKV sequences via maximum likelihood clade assignment (MLCA)-based genotyping, call the genotyping module from the GLUE console, for example:

```
Mode path: /
GLUE> project chikv
OK
Mode path: /project/chikv
GLUE> module chikvMaxLikelihoodGenotyper genotype file -f path/to/sequences/CHIKV.fasta 
```

Please note the above command sequence is equivalent to the following:

```
Mode path: /
GLUE> project chikv module chikvMaxLikelihoodGenotyper genotype file -f path/to/sequences/CHIKV.fasta 
```

* * * * * 

## Mutation frequencies

CHIKV-GLUE can provide a detailed frequency distribution of amino acids at a specific position within a CHIKV coding feature, based on the alignments contained with the project.
This can enable insights into the variability and conservation of CHIKV proteins.

The following command in the GLUE console calculates the amino acid frequencies at a specific position within a feature of CHIKV alignment:

```
Mode path: /project/chikv
GLUE> alignment AL_CHIKV_ECSA amino-acid frequency -c -r REF_MASTER_CHIKV -f E1 -l 226 226
```

This command produces results in a tabular output format like this:

```
+=========+=======+===========+============+======================+
| feature | codon | aminoAcid | numMembers |      pctMembers      |
+=========+=======+===========+============+======================+
| E1      | 226   | A         | 3050       | 74.19119435660423    |
| E1      | 226   | L         | 1          | 0.024324981756263683 |
| E1      | 226   | V         | 1060       | 25.784480661639503   |
+=========+=======+===========+============+======================+
```

### Command Breakdown

**`alignment AL_CHIKV_ECSA`**
Selects the alignment for chikungunya virus (ECSA genotype).

**`amino-acid frequency`**
Instructs GLUE to calculate amino acid frequencies within the selected alignment.

**`-c`**
Calculates the frequencies recursively, including any sub-alignments of AL_CHIKV_ECSA. In CHIKV-GLUE, alignments are arranged hierarchically to reflect evolutionary relationships.

**`-r REF_MASTER_CHIKV`**
Specifies the constraining reference sequence, `REF_MASTER_CHIKV`, which defines the coordinate space and the wild type amino acid for comparison.

**`-f E1`**
Indicates the coding feature within the reference sequence (E1) where amino acid frequencies will be calculated.

**`-l 226 226`**
Specifies the location within the feature to be analyzed. Here, it focuses on a single amino acid position (226).

### Interpretation of the Output

- **feature**: The coding feature analyzed (in this case, envelope).
- **codon**: The codon position within the feature (position 226).
- **aminoAcid**: The amino acid found at the specified codon position.
- **numMembers**: The number of sequences in the alignment containing the specified amino acid at the given position.
- **pctMembers**: The percentage of sequences in the alignment containing the specified amino acid at the given position.

* * * * * 

## Data Sources

CHIKV-GLUE relies on the following data sources:

- [NCBI Nucleotide](https://www.ncbi.nlm.nih.gov/nuccore)

* * * * * 

## Contributing

We welcome contributions from the community! If you're interested in contributing to CHIKV-GLUE, please review our [Contribution Guidelines](./md/CONTRIBUTING.md).

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./md/code_of_conduct.md)

* * * * * 

## License

The project is licensed under the [GNU Affero General Public License v. 3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)

* * * * * 

## Contact

For questions, issues, or feedback, please open an issue on the [GitHub repository](https://github.com/giffordlabcvr/CHIKV-GLUE/issues).

* * * * * 
