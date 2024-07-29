<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @help_topics/book.about.html.twig */
class __TwigTemplate_39e8f3526210f43b9638210b491f5782 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension(SandboxExtension::class);
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 5
        $context["user_overview_topic"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\help\HelpTwigExtension']->getTopicLink("user.overview"));
        // line 6
        yield "<h2>";
        yield t("What is a book?", array());
        yield "</h2>
<p>";
        // line 7
        yield t("A book is a structured group of content pages, arranged in a hierarchical structure called a <em>book outline</em>. A book hierarchy can be up to nine levels deep, and a book can include <em>Book page</em> content items or other content items. Every book has a default book-specific navigation block, which contains links that lead to the previous and next pages in the book and to the level above the current page in the book's structure.", array());
        yield "</p>
<h2>";
        // line 8
        yield t("What are the permissions for books?", array());
        yield "</h2>
<p>";
        // line 9
        yield t("The following permissions are needed to create and manage books; see @user_overview_topic and its related topics for more about permissions.", array("@user_overview_topic" => ($context["user_overview_topic"] ?? null), ));
        yield "</p>
<dl>
  <dt>";
        // line 11
        yield t("Create new books", array());
        yield "</dt>
  <dd>";
        // line 12
        yield t("Allows users to add new books to the site.", array());
        yield "</dd>
  <dt>";
        // line 13
        yield t("Add content and child pages to books and manage their hierarchies", array());
        yield "</dt>
  <dd>";
        // line 14
        yield t("Allows users to add configured types of content to existing books.", array());
        yield "</dd>
  <dt>";
        // line 15
        yield t("Administer book outlines", array());
        yield "</dt>
  <dd>";
        // line 16
        yield t("Allows users to add <em>any</em> type of content to a book, use the book overview administration page, and rearrange the pages of a book from the book outline page.", array());
        yield "</dd>
  <dt>";
        // line 17
        yield t("Administer site configuration (in the System module section)", array());
        yield "</dt>
  <dd>";
        // line 18
        yield t("Allows users to do many site configuration tasks, including configuring books. This permission has security implications.", array());
        yield "</dd>
  <dt>";
        // line 19
        yield t("View printer-friendly books", array());
        yield "</dt>
  <dd>";
        // line 20
        yield t("Allows users to click the <em>printer-friendly version</em> link to generate a printer-friendly display of the page, which includes pages below it in the book outline.", array());
        yield "</dd>
  <dt>";
        // line 21
        yield t("<em>Book page</em> content permissions (in the Node module section)", array());
        yield "</dt>
  <dd>";
        // line 22
        yield t("Like other content types, the <em>Book page</em> content type has separate permissions for creating, editing, and deleting a user's own and any content items of this type.", array());
        yield "</dd>
</dl>
<h2>";
        // line 24
        yield t("Managing books", array());
        yield "</h2>
<p>";
        // line 25
        yield t("Book management is handled by the core Book module. The topics listed below will help you create, edit, and configure books.", array());
        yield "</p>";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "@help_topics/book.about.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  113 => 25,  109 => 24,  104 => 22,  100 => 21,  96 => 20,  92 => 19,  88 => 18,  84 => 17,  80 => 16,  76 => 15,  72 => 14,  68 => 13,  64 => 12,  60 => 11,  55 => 9,  51 => 8,  47 => 7,  42 => 6,  40 => 5,);
    }

    public function getSourceContext()
    {
        return new Source("", "@help_topics/book.about.html.twig", "C:\\xampp1\\htdocs\\appChallenge\\app-drupal\\web\\core\\modules\\book\\help_topics\\book.about.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 5, "trans" => 6);
        static $filters = array("escape" => 9);
        static $functions = array("render_var" => 5, "help_topic_link" => 5);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'trans'],
                ['escape'],
                ['render_var', 'help_topic_link'],
                $this->source
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
