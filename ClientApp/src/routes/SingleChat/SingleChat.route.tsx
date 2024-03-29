import { ChangeEvent, Fragment, useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { SingleChatContainer } from "./SingleChat.styles";
import { chatFetchSingleStart } from "../../store/chat/chat.action";
import { selectSingleChat } from "../../store/chat/chat.selector";
import { CardContainer, CommentBarContainer, CommentContainer, FormContainer } from "../../components/Comment/Comment.styles";
import { TextContainer } from "../../components/Post/Post.styles";
import { selectSingleChatcomment } from "../../store/chatcomment/chatcomment.selector";
import { selectUserChatcomments } from "../../store/chatcomment/chatcomment.selector";
import { utcConverter } from "../../utils/date/date.utils";

interface IDefaultFormFields {
    chatValue: string;
    imageSource: string | ArrayBuffer | null | undefined;
    imageFile: any;
    show: boolean;
}

const defaultFormFields = {
    chatValue: "",
    imageSource: "",
    imageFile: null,
    show: false
}

function SingleChat() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const chat = useSelector(selectSingleChat);
    const comments = useSelector(selectUserChatcomments);
    let { id } = useParams();
    const queryId = parseInt(id!);

    const backToPosts = () => {
        navigate(`/chats`);
    }

    async function postComment() {

        // const formData = new FormData();
        // formData.append('postId', event.target.id)
        // formData.append('commentValue', formFields.commentValue);
        // formData.append('mediaLink', formFields.mediaLink);
        // formData.append('imageFile', formFields.imageFile);
        // addComment(formData)
        // .then(() => window.location.reload());
        // resetFormFields();
    };

    const resetFormFields = () =>
        setFormFields(defaultFormFields);

    const showPreview = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            let imageFile = event.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setFormFields({
                    ...formFields,
                    // imageFile,
                    // imageSource: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setFormFields({
                ...formFields,
                imageFile: null,
                // imageSource: null
            })
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    useEffect(() => {
        dispatch(chatFetchSingleStart(queryId));
    }, [id]);

    return (
        <Fragment>
            <SingleChatContainer>
                <Card className="bg-dark">
                    <Card.Body>
                        <Card.Img src="https://www.artlog.net/sites/default/files/styles/al_colorbox_rules/public/turrell_cregis_golay_federal_studio.jpg?itok=2M4Pyn0A"/>
                    </Card.Body>
                    <Card.Footer>{chat?.title}</Card.Footer>
                </Card>
            </SingleChatContainer>
            <CommentBarContainer>
                <CommentContainer>
                    <h1 className="notifications">Comments</h1>
                {
                    comments?.map(({ chatCommentId, chatValue, mediaLink, dateCreated }) => {
                        return <CardContainer>
                            <Card className="bg-dark" key={chatCommentId}>
                                <TextContainer>
                                    <Card.Text>{chatValue}</Card.Text>
                                    <Card.Text>{utcConverter(dateCreated)}</Card.Text>
                                </TextContainer>
                            </Card>
                        </CardContainer>
                    })
                }
                </CommentContainer>
                <FormContainer>
                <Form style={{ margin: 'auto' }} key={chat?.chatId} onSubmit={postComment}>
                    <Row style={{ margin: '.5rem', justifyContent: 'center' }} xs={1}>
                        <Col xs={12}>
                            <Row style={{ marginBottom: '1rem', justifyContent: 'center' }}>
                                <Col xs={12}>
                                    <Form.Group>
                                        <Form.Control style={{ height: '.5rem' }} name="commentValue" as="textarea" onChange={handleChange} placeholder=" Write your comment here" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row style={{ justifyContent: 'center' }}>
                                <Col xs={9}>
                                    <Form.Group className="mb-3" controlId="formMedia">
                                        <Form.Control onChange={showPreview} name="mediaLink" as="input" accept="image/*" type="file" placeholder="Media" />
                                    </Form.Group>
                                </Col>
                                <Col xs={3}>
                                    <button style={{ textAlign: 'center', width: '100%', height: 'auto'}} className="btn btn-light" type="submit">
                                        Post
                                    </button>
                                </Col>                
                            </Row>
                        </Col>
                    </Row>
                </Form>
                </FormContainer>
            </CommentBarContainer>
        </Fragment>
    )
}

export default SingleChat;