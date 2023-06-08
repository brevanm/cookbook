import Button from './Button';

export type Props = {
  setImage: (image: string | undefined) => void;
};

const ImageUpload = (props: Props) => {
  const { setImage } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const [file] = files;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <input
        accept="image/*"
        // style={{ display: 'none' }}
        id="profile-photo-upload"
        type="file"
        onChange={handleChange}
      />
      {/* <label htmlFor="profile-photo-upload">
        <Button>Upload</Button>
      </label> */}
    </>
  );
};

export default ImageUpload;
