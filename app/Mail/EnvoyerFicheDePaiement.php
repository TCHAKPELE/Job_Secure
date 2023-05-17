<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Contracts\Queue\ShouldQueue;

class EnvoyerFicheDePaiement extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $infos=[];

    public function __construct($infos)
    {
        $this->infos= $infos;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Fiche de paiement',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.fiche_de_paiement',
            with:[
                'name' => $this->infos['name'],
                'nom_entreprise' => $this->infos['nom_entreprise'],
                'titre_offre' => $this->infos['titre_offre'],
            ]
           
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [
            Attachment::fromPath(public_path('pdf/fiche_de_paye'.$this->infos['id_fiche'].'.pdf'))
            ->as('fiche_de_paye.pdf')
            ->withMime('application/pdf'),

        ];
    }
}
