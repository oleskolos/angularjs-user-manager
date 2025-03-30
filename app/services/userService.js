console.log("123");
app.service('UserService', function($q) {
    console.log("qwerty");
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    if (!users.length) {
      users = [
        {
          id: Date.now().toString(),
          username: 'admin',
          first_name: 'Admin',
          last_name: 'User',
          email: 'admin@example.com',
          password: 'Admin123',
          user_type: 'Admin'
        },
        {
          id: (Date.now() + 1).toString(),
          username: 'driver',
          first_name: 'Driver',
          last_name: 'User',
          email: 'driver@example.com',
          password: 'Driver123',
          user_type: 'Driver'
        }
      ];
      save();
    }

    function save() {
      localStorage.setItem('users', JSON.stringify(users));
    }
  
    this.getAll = () => $q.resolve(users);
  
    this.getById = (id) => $q.resolve(users.find(u => u.id === id));
  
    this.add = (user) => {
      if (users.find(u => u.username === user.username)) {
        return $q.reject({ username: 'Username must be unique' });
      }
      user.id = Date.now().toString();
      users.push(user);
      save();
      return $q.resolve(user);
    };
  
    this.update = (user) => {
      let idx = users.findIndex(u => u.id === user.id);
      if (idx !== -1) {
        users[idx] = user;
        save();
        return $q.resolve(user);
      }
      return $q.reject({ message: 'User not found' });
    };
  
    this.delete = (id) => {
      users = users.filter(u => u.id !== id);
      save();
      return $q.resolve();
    };
  });
  