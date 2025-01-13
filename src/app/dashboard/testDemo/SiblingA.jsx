
const SiblingA = ({onSendData}) => {
    const handleSendData = () => {
        onSendData('Data from Sibling A')
    }
  return (
    <div>
      SiblingA
        <button className="ml-2 border-2" onClick={handleSendData}>Send Data</button>
    </div>
  )
};

export default SiblingA;
