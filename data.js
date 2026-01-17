const datasets = [
  {
    id: "amlb-base",
    name: "AMLB-Base",
    type: "classification",
    quality: "Clean",
    description: "Perfectly balanced dataset for all ML models.",
    files: {
      full: "https://rvscedgl-ai-ds.github.io/AI-DS-Academic-Data-Repository/datasets/classification/AMLB-Base/full.csv",
      train: "https://rvscedgl-ai-ds.github.io/AI-DS-Academic-Data-Repository/datasets/classification/AMLB-Base/train.csv",
      test: "https://rvscedgl-ai-ds.github.io/AI-DS-Academic-Data-Repository/datasets/classification/AMLB-Base/test.csv"
    }
  },
  {
    id: "amlb-missing",
    name: "AMLB-Missing",
    type: "classification",
    quality: "Missing Values",
    description: "Dataset with controlled missing values.",
    files: {
      full: "https://rvscedgl-ai-ds.github.io/AI-DS-Academic-Data-Repository/datasets/classification/AMLB-Missing/full_missing.csv",
      train: "https://rvscedgl-ai-ds.github.io/AI-DS-Academic-Data-Repository/datasets/classification/AMLB-Missing/train_missing.csv",
      test: "https://rvscedgl-ai-ds.github.io/AI-DS-Academic-Data-Repository/datasets/classification/AMLB-Missing/test_missing.csv"
    }
  },
  {
    id: "amlb-outliers",
    name: "AMLB-Outliers",
    type: "classification",
    quality: "Outliers",
    description: "Dataset with injected outliers.",
    files: {
      full: "https://rvscedgl-ai-ds.github.io/AI-DS-Academic-Data-Repository/datasets/classification/AMLB-Student-Performance-Outliers/AMLB_Student_Performance_Outliers_full.csv",
      train: "https://rvscedgl-ai-ds.github.io/AI-DS-Academic-Data-Repository/datasets/classification/AMLB-Student-Performance-Outliers/AMLB_Student_Performance_Outliers_train.csv",
      test: "https://rvscedgl-ai-ds.github.io/AI-DS-Academic-Data-Repository/datasets/classification/AMLB-Student-Performance-Outliers/AMLB_Student_Performance_Outliers_test.csv"
    }
  },
  {
    id: "amlb-cluster",
    name: "AMLB-Cluster",
    type: "clustering",
    quality: "Unsupervised",
    description: "Synthetic dataset for clustering algorithms.",
    files: {
      full: "https://rvscedgl-ai-ds.github.io/AI-DS-Academic-Data-Repository/datasets/clustering/AMLB_Academic_cluster.csv"
    }
  },
  {
  id: "amlb-student-regression-clean",
  name: "AMLB Student Performance (Clean)",
  type: "regression",
  quality: "Clean",
  description: "Clean regression dataset for predicting student exam scores.",
  files: {
	  full: "https://rvscedgl-ai-ds.github.io/AI-DS-Academic-Data-Repository/datasets/regression/AMLB_Student_Regression_full.csv",
      train: "https://rvscedgl-ai-ds.github.io/AI-DS-Academic-Data-Repository/datasets/regression/AMLB_Student_Regression_train.csv",
      test: "https://rvscedgl-ai-ds.github.io/AI-DS-Academic-Data-Repository/datasets/regression/AMLB_Student_Regression_test.csv"
    
  }
},
{
  id: "amlb-student-regression-missing",
  name: "AMLB Student Performance (Missing Values)",
  type: "regression",
  quality: "Missing Values",
  description: "Regression dataset with controlled missing values.",
  files: {}
},
{
  id: "amlb-student-regression-outliers",
  name: "AMLB Student Performance (Outliers)",
  type: "regression",
  quality: "Outliers",
  description: "Regression dataset with realistic outliers for robustness testing.",
  files: {}
}

];


