function WorkItem(props) {
    return (
        <div className="work-item">
        <h3>{props.itemObj.title}</h3>
        <h5>{props.itemObj.subText}</h5>
        <a className="work-link" id="work-link-1" href={props.itemObj.demoURL}>Demo</a>
        <a className="work-link" id="work-link-2" href={props.itemObj.repoURL}>Repo</a>
    </div>
    )
  }
  
  export default WorkItem