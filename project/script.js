function createChat() {
    const chatTopic = document.getElementById('chatTopic').value;
    if (chatTopic) {
        const chatList = document.getElementById('chatList');
        const listItem = document.createElement('li');
        listItem.textContent = chatTopic;
        listItem.onclick = function() {
            openChat(chatTopic);
        };
        chatList.appendChild(listItem);
    }
}

function openChat(topic) {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('chatPage').style.display = 'block';
    document.getElementById('chatTopicHeading').textContent = topic;
}

function sendMessage() {
    const senderName = document.getElementById('senderName').value;
    const messageContent = document.getElementById('messageContent').value;
    if (senderName && messageContent) {
        const messageTable = document.getElementById('messageTable');
        const newRow = messageTable.insertRow(-1);
        const senderCell = newRow.insertCell(0);
        const contentCell = newRow.insertCell(1);
        senderCell.textContent = senderName;
        contentCell.textContent = messageContent;
    }
}

function goToHomePage() {
    document.getElementById('chatPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
}
