// variable names
const voters = [
    ["Antonio", true, 5],
    ["Marija", false],
    ["Darko", true, 3],
];

// function
function findVoter(name) {
    for (const voter of voters) {
        if (voter[0] === name) {
            return voter;
        }
    }
    return null;
}

const name = prompt("Enter a name:");
const voter = findVoter(name);

// if loop
if (voter) {
    if (voter[1] === true) {
        const votedTable = document.getElementById("voted");
        const row = votedTable.insertRow();
        row.insertCell(0).innerHTML = voter[0];
        row.insertCell(1).innerHTML = "Voted!";
        row.insertCell(2).innerHTML = voter[2];
    } else {
        const didNotVoteTable = document.getElementById("didNotVote");
        const row = didNotVoteTable.insertRow();
        row.insertCell(0).innerHTML = voter[0];
        row.insertCell(1).innerHTML = "Didn't vote";
    }
} else {
    alert("Voter not found");
}
