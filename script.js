function showStory() {
    document.getElementById("life-story").innerHTML = `
        My journey began with a deep love for music, faith, and education. 
        As a musician, I have dedicated myself to inspiring others through performances and compositions. 
        My passion for community leadership has led me to create faith-driven outreach projects. 
        Now, as I step into education, I aspire to nurture young minds while continuing my web development journey to bring creative ideas to life.
    `;
}
function toggleInfo() {
    let infoText = document.getElementById("info-text");
    if (infoText.innerHTML.includes("Click the button")) {
        infoText.innerHTML = `
            <ul>
                <li><strong>Name:</strong> Emmanuel Suah</li>
                <li><strong>Profession:</strong> Musician, Community Leader, Aspiring Educator</li>
                <li><strong>Skills:</strong> Web Development, Music Production, Teaching Techniques</li>
                <li><strong>Interests:</strong> Ministry Outreach, Music Promotion, Education</li>
            </ul>
        `;
    } else {
        infoText.innerHTML = "Click the button to view my details.";
    }
}
