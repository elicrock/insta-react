import React from 'react';
import User from './User';

export default function Users() {
  return (
    <div className="right">
      <User 
        src="https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg" alt="jessy_john" name="jessy_john" />
      
      <div className="users__block">
        <User 
          src="https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg" alt="jessy_john" name="jessy_john" 
          min />
        <User 
          src="https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg" alt="jessy_john" name="jessy_john" 
          min />
        <User 
          src="https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg" alt="jessy_john" name="jessy_john" 
          min />
        <User 
          src="https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg" alt="jessy_john" name="jessy_john" 
          min />
      </div>

      
    </div>
  )
}