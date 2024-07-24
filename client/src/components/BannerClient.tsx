
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';
import { styled } from '@mui/system';

const items = [
    {
        name: "Banner 1",
        description: "Nike Mecurial Superfly 10 Ellite",
        image: "https://cdn.mediamart.vn/images/news/10-laptop-co-thiet-ke-dep-nhat-the-gioi-7s4bH1.jpg"
    },
    {
        name: "Banner 2",
        description: "This is the second banner",
        image: "https://cdn.nguyenkimmall.com/images/companies/_1/dell-vostro-5568-thiet-ke-dep.jpg"
    },
    {
        name: "Banner 3",
        description: "This is the third banner",
        image: "https://laptopdieplinh.com/uploads/hp-envy-13.jpg"
    }
];

const BannerImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'fill', // Đảm bảo ảnh được hiển thị đầy đủ mà không bị cắt
});

const BannerContainer = styled(Box)({
    marginBottom: '10px',
    width: '100%',
    height: '100%', // Chiều cao cố định cho container

});

function BannerItem(props: { item: { image: string; name: string; description: string; }; }) {
    return (
        <Paper style={{ height: '600px' }}>
            <BannerImage src={props.item.image} alt={props.item.name} />
        </Paper>
    );
}

const BannerSlideshow = () => {
    return (
        <BannerContainer>
            <Carousel>
                {items.map((item, i) => (
                    <BannerItem key={i} item={item} />
                ))}
            </Carousel>
        </BannerContainer>
    );
};

export default BannerSlideshow;
