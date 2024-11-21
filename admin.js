// Lataa olemassa olevat äänestykset
const loadPolls = () => {
    const polls = JSON.parse(localStorage.getItem('polls')) || [];
    const pollList = document.getElementById('pollList');
    pollList.innerHTML = '';
    polls.forEach((poll, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
      listItem.innerHTML = `
        ${poll.name}
        <button class="btn btn-danger btn-sm" onclick="deletePoll(${index})">Poista</button>
      `;
      pollList.appendChild(listItem);
    });
  };
  
  // Luo uusi äänestys
  document.getElementById('createPollForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('aanestysNimi').value.trim();
    const options = document.getElementById('vaihtoehdot').value.trim().split(',').map(opt => opt.trim());
    if (name && options.length > 0) {
      const polls = JSON.parse(localStorage.getItem('polls')) || [];
      polls.push({ name, options, votes: Array(options.length).fill(0) });
      localStorage.setItem('polls', JSON.stringify(polls));
      loadPolls();
    }
  });
  
  // Poista äänestys
  const deletePoll = (index) => {
    const polls = JSON.parse(localStorage.getItem('polls')) || [];
    polls.splice(index, 1);
    localStorage.setItem('polls', JSON.stringify(polls));
    loadPolls();
  };
  
  // Lataa äänestykset alussa
  window.onload = loadPolls;
  