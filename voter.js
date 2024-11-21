// Lataa äänestysvaihtoehdot
const loadVotingOptions = () => {
    const polls = JSON.parse(localStorage.getItem('polls')) || [];
    const votingList = document.getElementById('votingList');
    votingList.innerHTML = '';
    polls.forEach((poll, pollIndex) => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
      listItem.innerHTML = `
        ${poll.name}
        <button class="btn btn-primary btn-sm" onclick="vote(${pollIndex})">Äänestä</button>
      `;
      votingList.appendChild(listItem);
    });
  };
  
  // Äänestä
  const vote = (pollIndex) => {
    const polls = JSON.parse(localStorage.getItem('polls')) || [];
    const poll = polls[pollIndex];
    const option = prompt(`Valitse vaihtoehto: \n${poll.options.map((opt, idx) => `${idx + 1}. ${opt}`).join('\n')}`);
    const optionIndex = parseInt(option) - 1;
    if (!isNaN(optionIndex) && optionIndex >= 0 && optionIndex < poll.options.length) {
      poll.votes[optionIndex]++;
      localStorage.setItem('polls', JSON.stringify(polls));
      alert('Äänesi on tallennettu!');
    } else {
      alert('Virheellinen valinta.');
    }
  };
  
  // Lataa vaihtoehdot alussa
  window.onload = loadVotingOptions;
  