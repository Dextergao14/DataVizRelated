<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Data Viz Assignment3: Setting paragraphs' style conditionally, based on data</title>
        <script type = "text/javascript" src="../d3.js"></script>
    </head>
    <body>
            <script type="text/javascript">
            var dataset = [];
            for (var i = 1; i <= 100; i++) {
                dataset.push(i);
            }
            assignment3.csv("d3.csv", function(dataset) {
                console.log(dataset);
            });

            assignment3.select("body").selectAll("p")
                .data(dataset)
                .enter()
                .append("p")
                .text(function(d) {
                    return d;
                })
                .style("color", function(d) {
                    if (d % 3 == 0) {
                        return blue;
                    } else if (d % 5 == 0) {
                        return red;
                    } else if (d % 15 == 0) {
                        return green;
                    } else {
                        return black;
                    }
                });
            </script>

    </body>
</html>
