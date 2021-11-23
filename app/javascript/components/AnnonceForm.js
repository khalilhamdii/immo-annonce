import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AnnonceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const apiAddAnnonce = (data) => {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const url = `/api/v1/annonces/`;
    axios
      .post(url, data, {
        headers: {
          'X-CSRF-Token': token,
          'content-type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response);
        if (response.statusText === 'Created') {
          navigate(`/annonces/${response.data.id}`);
        }
      })
      .catch((error) => console.log('api errors:', error));
  };
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('price', data.price);
    formData.append('description', data.description);
    formData.append('image', data.image[0]);
    console.log(formData);
    apiAddAnnonce(formData);
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-lg-8 offset-lg-2">
          <h1 className="font-weight-normal mb-5">
            Ajouter une nouvelle annonce!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group my-4">
              <label htmlFor="title">Titre de l'annonce*</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                {...register('title', {
                  required: 'This is required',
                  maxLength: {
                    value: 20,
                    message: 'This input exceed maximum length.',
                  },
                  minLength: {
                    value: 4,
                    message: 'This input is below minimum length.',
                  },
                })}
              />
              <ErrorMessage errors={errors} name="title">
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p className="text-danger" key={type}>
                      {message}
                    </p>
                  ))
                }
              </ErrorMessage>
            </div>
            <div className="form-group my-4">
              <label htmlFor="price">Prix*</label>
              <input
                type="number"
                name="price"
                id="price"
                className="form-control"
                {...register('price', {
                  required: 'This is required',
                  max: {
                    value: 10000000,
                    message: 'This input exceed maximum length.',
                  },
                  min: {
                    value: 0,
                    message: 'This input is below minimum length.',
                  },
                })}
              />
              <ErrorMessage errors={errors} name="price">
                {({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p className="text-danger" key={type}>
                      {message}
                    </p>
                  ))
                }
              </ErrorMessage>
            </div>
            <div className="form-group my-4">
              <label htmlFor="image">Ajouter une photo*</label>
              <input
                type="file"
                name="image"
                id="image"
                className="form-control"
                accept="image/*"
                {...register('image', {
                  required: true,
                })}
              />
              {errors.image && errors.image.type === 'required' && (
                <p>This is required</p>
              )}
            </div>
            <label htmlFor="description">Description*</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="5"
              {...register('description', {
                required: 'This is required',
                maxLength: {
                  value: 500,
                  message: 'This input exceed maximum length.',
                },
                minLength: {
                  value: 4,
                  message: 'This input is below minimum length.',
                },
              })}
            />
            <ErrorMessage errors={errors} name="description">
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p className="text-danger" key={type}>
                    {message}
                  </p>
                ))
              }
            </ErrorMessage>
            <div className="btn-group">
              <button type="submit" className="btn btn-dark mt-3 me-2">
                Créer l'annonce
              </button>
              <Link to="/" className="btn mt-3">
                Revenir vers l'accueil
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AnnonceForm;
