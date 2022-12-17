import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import  Card  from "react-bootstrap/Card";

export function SortableList(props) {
    // props.id
    // Javascript == id
    //  python == id
    const {
        attributes, // to use useSortable hook
        listeners,  // onDrag event or onDrop event
        setNodeRef, // allows us to tell you sortable exactly witch node to attach
        transform,  // pick up and move card around
        transition  // pick up and move card around
    } = useSortable({id: props.id})

    const style = {
        transform : CSS.Transform.toString(transform),
        transition
    }
    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Card className="m-3">{props.id}</Card>
        </div>
    )
}