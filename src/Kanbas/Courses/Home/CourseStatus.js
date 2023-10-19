import "./index.css"

function CourseStatus() {
    return(
        <div>
    <h3>Course Status</h3>
                    <div class="btn-group">
                        <button class="btn btn-secondary">Unpublish</button>
                    
                        <button class="btn btn-success">Published</button>
                    </div>


                <button class="btn btn-secondary wd-course-status-buttons">Import Existing Content</button>
                <button class="btn btn-secondary wd-course-status-buttons">Import from Commons</button>
                <button class="btn btn-secondary wd-course-status-buttons">Choose Home Page</button>
                <button class="btn btn-secondary wd-course-status-buttons">View Course Stream</button>
                <button class="btn btn-secondary wd-course-status-buttons">New Analytics</button>
                <button class="btn btn-secondary wd-course-status-buttons">View Course Notifications</button>
                
            </div>
    )
}
export default CourseStatus;