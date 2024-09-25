export type ProjectType = {
  _id: string;
  name: string;
  projectImage: {
    alt: string;
    imageUrl: string;
  };
  slug: string;
  description: string;
  price: number;
};

export type ServiceType = {
  _id: string;
  name: string;
  description: string;
  serviceImage: {
    alt: string;
    imageUrl: string;
  };
};

export type MemberType = {
  _id: string;
  name: string;
  role: string;
  memberImage: {
    alt: string;
    imageUrl: string;
  };
};
