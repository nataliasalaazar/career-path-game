<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Career Path Game</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
        .option { margin: 10px; padding: 10px; border: 2px solid #000; cursor: pointer; display: inline-block; background-color: #f8f8f8; }
        .option:hover { background-color: #ddd; }
        .hidden { display: none !important; visibility: hidden; }
    </style>
</head>
<body>
    <h1>Choose Your Career Path</h1>
    <div id="careerChoices">
        <div class="option" onclick="selectCareer('Tech')">Tech</div>
        <div class="option" onclick="selectCareer('Medicine')">Medicine</div>
        <div class="option" onclick="selectCareer('Business')">Business</div>
        <div class="option" onclick="selectCareer('Arts')">Arts</div>
        <div class="option" onclick="selectCareer('Fashion')">Fashion</div>
    </div>
    
    <div id="educationChoices" class="hidden">
        <h2>Choose Your Education Path</h2>
        <div class="option" onclick="selectEducation('College Degree')">College Degree</div>
        <div class="option" onclick="selectEducation('Self-Taught')">Self-Taught</div>
        <div class="option" onclick="selectEducation('Trade School')">Trade School</div>
        <div class="option" onclick="selectEducation('Internship')">Internship/Work Experience</div>
    </div>
    
    <div id="result" class="hidden">
        <h2>Your Career Outcome</h2>
        <p id="outcomeText"></p>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
