<?php

$letters = ['a', 'b', 'c', 'd', 'e', 'f'];
$random_letters = [];
for ($i = 0; $i < 100; $i++) {
    $random_letters[] = $letters[rand(0, 5)];
}


$counts = array_count_values($random_letters);

foreach ($letters as $letter) {
    if (!isset($counts[$letter])) {
        $counts[$letter] = 0;
    }
}
ksort($counts);

$labels = json_encode(array_keys($counts));
$data = json_encode(array_values($counts));
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Diagramos</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .container { width: 800px; margin: 40px auto; }
        h2 { margin-top: 30px; }
        .list { font-size: 1.1em; background: #f9f9f9; padding: 10px; border-radius: 6px; }
        canvas { margin: 40px 0 0 0; }
        .charts { display: flex; gap: 40px; justify-content: center; flex-wrap: wrap; }
    </style>
                                                                    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
<div class="container">
    <h1>Diagramos</h1>
    <h2>Bendras sąrašas</h2>
    <div class="list">
        <?php
        foreach ($random_letters as $i => $letter) {
            echo $letter;
            if (($i + 1) % 20 === 0) echo "<br>";
            else echo " ";
        }
        ?>
    </div>

    <h2>Raidžių kiekis</h2>
    <table border="1" cellpadding="6" style="border-collapse:collapse;">
        <tr>
            <?php foreach ($letters as $letter) echo "<th>$letter</th>"; ?>
        </tr>
        <tr>
            <?php foreach ($letters as $letter) echo "<td>{$counts[$letter]}</td>"; ?>
        </tr>
    </table>

    <h2>Diagramos:</h2>
    <div class="charts">
        <div>
            <h3>X, Y diagrama</h3>
            <canvas id="barChart" width="320" height="260"></canvas>
        </div>
        <div>
            <h3>Skritulinė diagrama</h3>
            <canvas id="pieChart" width="320" height="260"></canvas>
        </div>
    </div>
</div>
<script>
   
    const labels = <?php echo $labels; ?>;
    const data = <?php echo $data; ?>;
    const colors = [
        "#ff6384", "#36a2eb", "#ffce56", "#8ad96a", "#9b59b6", "#f39c12"
    ];

    // Bar chart
    new Chart(document.getElementById('barChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Count',
                data: data,
                backgroundColor: colors,
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true, stepSize: 1 }
            }
        }
    });

    /* Pie chart */
    new Chart(document.getElementById('pieChart').getContext('2d'), {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors,
            }]
        },
        options: {
            plugins: {
                legend: { position: "bottom" }
            }
        }
    });
</script>
</body>
</html>