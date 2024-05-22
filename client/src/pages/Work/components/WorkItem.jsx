function WorkItem(props) {
    return (
        <div className="work-item">
            <h3>{props.itemObj.title}</h3>
            <h5>{props.itemObj.subText}</h5>
            <div className="work-links">
                <a id="work-link-1" href={props.itemObj.demoURL}>Demo</a>
                <a id="work-link-2" href={props.itemObj.repoURL}>Repo</a>
            </div>
        </div>
    )
  }
  
  export default WorkItem