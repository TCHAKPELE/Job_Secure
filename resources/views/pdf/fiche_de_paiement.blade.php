<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Fiche de paye</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 14px;
            margin: 0;
        }

        .container {
            width: 100%;
            margin: 0 auto;
            padding: 10px;
            background-color: #f8f8f8;
            box-sizing: border-box;
            border: 1px solid #ccc;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }

        .header h1 {
            font-size: 28px;
            font-weight: bold;
        }

        .header img {
            height: 50px;
        }

        .info-container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 30px;
        }

        .entreprise-info,
        .interimaire-info {
            width: 45%;
        }

        .entreprise-info h3,
        .interimaire-info h3 {
            font-size: 18px;
            margin-bottom: 10px;
        }

        .entreprise-info p,
        .interimaire-info p {
            margin: 0;
        }

        .table-container {
            width: 100%;
            margin-bottom: 30px;
            border-collapse: collapse;
        }

        .table-container th,
        .table-container td {
            padding: 10px;
            border: 1px solid #ccc;
        }

        .table-container th {
            background-color: #f2f2f2;
            text-align: left;
        }

        .total {
            display: flex;
            justify-content: flex-end;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 30px;
        }

        .footer {
            font-size: 12px;
            text-align: center;
            border-top: 1px solid #ccc;
            padding-top: 20px;
            margin-top: 40px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>Fiche de paye</h1>
        </div>
        <div class="info-container">
            <table>
                <tr>
                    <td style="padding-right: 200px;"><h2>Entreprise</h2></td>
                    <td><h2>Intérimaire</h2></td>
                </tr>
                <tr>
                    <td style="padding-right: 200px;">{{ $mission->entreprise->nom_entreprise }}</td>
                    <td>{{ $mission->interimaire->nom }} {{ $mission->interimaire->prenom }}</td>
                </tr>
                <tr>
                    <td style="padding-right: 200px;">{{ $mission->entreprise->adresse_entreprise }}</td>
                    <td>{{ $mission->interimaire->adresse_interimaire }}</td>
                </tr>
                <tr>
                    <td style="padding-right: 200px;">{{ $mission->entreprise->telephone_entreprise }}</td>
                    <td>{{ $mission->interimaire->telephone_interimaire }}</td>
                </tr>
                <tr>
                    <td style="padding-right: 200px;">{{ $mission->entreprise->email }}</td>
                    <td>{{ $mission->interimaire->email }}</td>
                </tr>
                <tr>
                    <td style="padding-right: 200px;"></td>
                    <td>{{ $mission->interimaire->iban }}</td>
                </tr>
                

            </table>

        </div>
        <table class="table-container">
            <thead>
                <tr>
                    <th>Titre offre</th>
                    <th>Nbr d'heure</th>
                    <th>Salaire</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ $mission->offre->titre_offre }}</td>
                    <td>{{ $nbr_heures_effectuees }}</td>
                    <td>{{ $mission->offre->salaire_offre }}</td>
                    <td>{{ $montant_total }}</td>
                </tr>
            </tbody>
        </table>
        <div class="total">
            <span>Total :</span>
            <span>{{ $montant_total }} €</span>
        </div>
        <div class="footer">
            <p>Adresse : 123 Rue , Paris, France</p>
            <p>Téléphone : +1234567890</p>
            <p>Email : contact@interimworld.com</p>
        </div>

    </div>
</body>

</html>