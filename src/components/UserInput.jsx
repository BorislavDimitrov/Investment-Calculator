export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label for="fname">Initial investment</label>
          <input type="text" name="fname" required />
        </p>
        <p>
          <label for="fname">Annual investment</label>
          <input type="text" name="fname" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label for="fname">Expected return</label>
          <input type="text" name="fname" required />
        </p>
        <p>
          <label for="fname">Duration</label>
          <input type="number" name="fname" required min="0" />
        </p>
      </div>
    </div>
  );
}
