$(document).ready(function() {
    $("#checkrisk").on("click", function() {
        // 1. Initialize an object to count symptom selections per organ
        const riskCount = {};
        
        // 2. Find all selected checkboxes with the class 'symptom' or 'mental symptom'
        // The ':checked' selector filters for selected checkboxes
        $("#RISKFORM input[type='checkbox']:checked").each(function() {
            // Get the value, which is the organ name (e.g., 'kidneys', 'liver')
            const organ = $(this).val();
            
            // 3. Count the number of selected symptoms for this organ
            if (riskCount[organ]) {
                riskCount[organ]++;
            } else {
                riskCount[organ] = 1;
            }
        });
        
        let resultHtml = "<h2>Organ Risk Assessment:</h2>";
        
        // 4. Check if any symptoms were selected
        if (Object.keys(riskCount).length === 0) {
            resultHtml += "<p>Please select at least one symptom to check the risk.</p>";
        } else {
            resultHtml += "<p>Based on your selections, the following organs have symptoms present:</p>";
            resultHtml += "<ul>";
            
            // 5. Iterate over the counted organs and display the risk
            for (const organ in riskCount) {
                const count = riskCount[organ];
                resultHtml += `<li>Potential Risk to **${organ.toUpperCase()}**: ${count} symptom(s) selected.</li>`;
            }
            resultHtml += "</ul>";
            resultHtml += "<p>_Disclaimer: This is for analysis purposes only and is not a medical diagnosis._</p>";
        }
        
        // 6. Display the final result in the #result div
        $("#result").html(resultHtml);
    });
});
$(document).ready(function() {
    $("#checkrisk").on("click", function() {
        const riskCount = {};
        let totalSymptoms = 0;
        
        // 1. Count selected symptoms per organ
        $("#RISKFORM input[type='checkbox']:checked").each(function() {
            const organ = $(this).val();
            totalSymptoms++;
            
            // Increment the count for the organ
            if (riskCount[organ]) {
                riskCount[organ]++;
            } else {
                riskCount[organ] = 1;
            }
        });
        
        let resultHtml = "<h2>Organ Risk Assessment:</h2>";
        
        // 2. Check for selected symptoms
        if (Object.keys(riskCount).length === 0) {
            resultHtml += "<p>Please select at least one symptom to check the risk.</p>";
            $("#result").html(resultHtml);
            return; // Stop execution if nothing is selected
        }
        
        // 3. Find the highest count to normalize the chart bars
        const maxCount = Math.max(...Object.values(riskCount));
        
        // 4. Start building the chart HTML
        resultHtml += "<h3>Symptom Frequency by Organ:</h3>";
        resultHtml += "<div class='chart-container'>"; // Container for the chart
        
        // 5. Generate a bar for each organ risk
        for (const organ in riskCount) {
            const count = riskCount[organ];
            // Calculate the bar width as a percentage of the max count (for scaling)
            const barWidth = (count / maxCount) * 100; 
            
            // Generate the HTML for one bar
            resultHtml += `
                <div class="chart-bar-group">
                    <div class="organ-label">${organ.toUpperCase()}</div>
                    <div class="bar-wrapper">
                        <div class="bar" style="width: ${barWidth}%;">
                            ${count} symptom(s)
                        </div>
                    </div>
                </div>
            `;
        }
        
        resultHtml += "</div>"; // Close chart-container
        
        resultHtml += "<p>_Disclaimer: This is for analysis purposes only and is not a medical diagnosis._</p>";
        
        // 6. Display the final result
        $("#result").html(resultHtml);
    });
});