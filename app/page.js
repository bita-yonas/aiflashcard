"use client";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Container, Toolbar, Typography, Box, Grid, Button, Paper, Card, CardContent, CardActions } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flashcard Generator</title>
        <meta name="description" content="Create Flashcards from your text" />
      </Head>

      {/* Navigation Bar */}
      <AppBar position="static" sx={{ bgcolor: 'primary.main', boxShadow: 'none' }}>
        <Toolbar sx={{ minHeight: 64, px: 4 }}>
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Flashcard SaaS
          </Typography>
          <SignedOut>
            <Button color='inherit' href="/sign-in" sx={{ mr: 2 }}>
              Login
            </Button>
            <Button variant="outlined" color='inherit' href="/sign-up">
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ my: 6, textAlign: 'center' }}>
        <Box
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 3,
            p: 6,
            boxShadow: 3,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 'bold', mb: 2 }}>
            Transform Your Text into Flashcards
          </Typography>
          <Typography variant="h5" sx={{ fontSize: '1.5rem', mb: 4 }}>
            The simplest way to create and study flashcards online
          </Typography>
          <Button variant="contained" color="primary" sx={{ fontSize: '1.25rem', padding: '12px 24px', borderRadius: '50px' }}>
            Get Started for Free
          </Button>
        </Box>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ my: 10 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', mb: 6 }}>
          Key Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                  Easy Text Input
                </Typography>
                <Typography>
                  Simply input your text and let our intelligent software handle the rest. Flashcards have never been easier to create.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                  Smart Flashcards
                </Typography>
                <Typography>
                  Our AI intelligently converts your text into concise flashcards, perfect for studying and memorization.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                  Accessible Anywhere
                </Typography>
                <Typography>
                  Access your flashcards from any device, at any time. Study on the go with ease.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Pricing Section */}
      <Container maxWidth="lg" sx={{ my: 10, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
          Pricing Plans
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Basic
                </Typography>
                <Typography variant="h6" gutterBottom>
                  $5 / month
                </Typography>
                <Typography sx={{ mb: 4 }}>
                  Access to basic flashcard features and limited storage.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" sx={{ m: '0 auto', fontSize: '1.25rem', padding: '12px 24px', borderRadius: '50px' }}>
                  Choose Basic
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Pro
                </Typography>
                <Typography variant="h6" gutterBottom>
                  $10 / month
                </Typography>
                <Typography sx={{ mb: 4 }}>
                  Unlimited flashcards and storage, with priority support.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" sx={{ m: '0 auto', fontSize: '1.25rem', padding: '12px 24px', borderRadius: '50px' }}>
                  Choose Pro
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}