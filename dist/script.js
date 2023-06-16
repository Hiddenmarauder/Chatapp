

window.addEventListener('DOMContentLoaded', function() {
    var messageInput = document.getElementById('message-input');
    var sendButton = document.getElementById('send-button');
    var chatMessages = document.getElementById('chat-messages');
    var timeElement = document.getElementById('timestamp')
  
    sendButton.addEventListener('click', function() {
      var message = messageInput.value;
      if (message.trim() !== '') {
        var messageElement = document.createElement('message-body');
        messageElement.classList.add('message');
  
        var senderElement = document.createElement('span');
        senderElement.classList.add('sender');
        senderElement.textContent = 'User:  '; // Replace with actual sender name
        messageElement.appendChild(senderElement);
  
        var textElement = document.createElement('span');
        textElement.textContent = message;
        messageElement.appendChild(textElement);
  
        var timeElement = document.createElement('time');
        timeElement.classList.add('timestamp');
        timeElement.textContent = getCurrentTime();
        messageElement.appendChild(timeElement);
  
        chatMessages.appendChild(messageElement);
        messageInput.value = '';
      }
    });
  
    messageInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        sendButton.click();
      }
    });
  
    function getCurrentTime() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var time = hours + ':' + (minutes < 10 ? '0' : '') + minutes;
      return time;
    }
  });
  