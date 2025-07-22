# 🌟 Citations Inspirantes - Déploiement AWS

Générateur de citations inspirantes déployé sur AWS avec S3 + CloudFront.

## 📋 Projet

Une application React moderne qui affiche des citations inspirantes dans 3 catégories :
- 🚀 **Motivation** 
- 🧠 **Sagesse**
- ❤️ **Amour**

### 🎨 Fonctionnalités
- ✨ Design moderne avec animations CSS
- 🎲 Génération aléatoire de citations
- 📱 Interface responsive
- ⚡ Déployé sur AWS CloudFront pour des performances optimales

## 🏗️ Architecture AWS

- **S3** : Hébergement des fichiers statiques
- **CloudFront** : CDN global avec HTTPS
- **Origin Access Control (OAC)** : Sécurisation de l'accès S3
- **Terraform** : Infrastructure as Code

## 🚀 Guide de déploiement

### Prérequis

1. **Node.js** installé (pour React)
2. **Terraform** installé ([Installation](https://developer.hashicorp.com/terraform/downloads))
3. **AWS CLI** configuré avec tes credentials ([Guide AWS](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html))

### Étape 1 : Build de l'application React

```bash
# Aller dans le dossier React
cd react-app

# Installer les dépendances
npm install

# Construire l'application pour la production
npm run build
```

### Étape 2 : Déploiement de l'infrastructure

```bash
# Aller dans le dossier infrastructure
cd ../infra

# Initialiser Terraform
terraform init

# Planifier le déploiement (optionnel mais recommandé)
terraform plan

# Appliquer la configuration
terraform apply
# ⚠️ Taper "yes" pour confirmer, ou utiliser -auto-approve si tu es sûr
```

### Étape 3 : Récupérer l'URL du site

Une fois le déploiement terminé, Terraform affiche les outputs :

```bash
# Voir les informations de déploiement
terraform output

# Output exemple :
# website_url = "https://d1qidp6sao6rb0.cloudfront.net"
```

🎉 **Ton site est maintenant live !** Ouvre l'URL dans ton navigateur.

## 🗑️ Suppression des ressources

Pour supprimer toute l'infrastructure et éviter les coûts :

```bash
# Dans le dossier infra/
terraform destroy

# Confirmer avec "yes" ou utiliser -auto-approve
```

⚠️ **Note** : CloudFront peut prendre 15-20 minutes à se supprimer complètement.

## 💰 Coûts

Ce projet utilise le **AWS Free Tier** :
- ✅ **S3** : 5 GB gratuits/mois
- ✅ **CloudFront** : 1 TB de trafic gratuit/mois
- ✅ **Requêtes** : Largement dans les limites gratuites

**Coût estimé** : **GRATUIT** pour un usage personnel normal.

## 📁 Structure du projet

```
IIM-TP-S3-CloudFront/
├── react-app/              # Application React
│   ├── src/                 # Code source
│   ├── dist/               # Build de production
│   └── package.json
├── infra/                  # Infrastructure Terraform
│   ├── main.tf             # Ressources AWS
│   ├── variables.tf        # Variables de configuration
│   └── providers.tf        # Configuration providers
└── README.md
```

## 🔧 Configuration

### Variables Terraform disponibles

Tu peux personnaliser le déploiement en modifiant `infra/variables.tf` :

- `bucket_name` : Nom du bucket S3
- `cloudfront_price_class` : Classe de prix CloudFront
- `cloudfront_default_ttl` : Durée de cache par défaut
- `tags` : Tags AWS pour l'organisation

### Exemple de personnalisation

```hcl
# Dans infra/terraform.tfvars (à créer)
bucket_name = "mon-site-citations"
cloudfront_price_class = "PriceClass_All"
```

## 🛠️ Développement local

```bash
# Lancer l'app React en local
cd react-app
npm run dev
```

## 🔍 Vérification du déploiement

### Via AWS Console

1. **S3** : Cherche ton bucket dans la console AWS
2. **CloudFront** : Vérifie ta distribution 
3. **Région** : Assure-toi d'être en `eu-west-1` (Irlande)

### Via Terraform

```bash
# Voir l'état des ressources
terraform show

# Voir uniquement les outputs
terraform output
```


